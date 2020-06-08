import React from 'react';
import AlbumList from './AlbumList';
import Pagination from './Pagination';
import PhotoList from './PhotoList';
import Title from './Title';
import { Link } from 'react-router-dom';
import '../../App.css';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        const identity = props.match.params.id.split('_');
        this.state = {
            albums: [],
            albumId: null,
            albumTitle: '',
            error: null,
            isAlbumPage: true,
            isLoading: true,
            name: identity[0],
            numOfPhotos: null,
            pageNumber: null,
            photos: [],
            userId: identity[1],
        }

        this.handleAlbumClick = this.handleAlbumClick.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.resetToAlbumPage = this.resetToAlbumPage.bind(this);
    }

    componentDidMount() {
        const { userId } = this.state;
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(
                (albums) => {
                    this.setState({ 
                        albums,
                        isLoading: false,
                    })
                },
                (error) => {
                    this.setState({
                        error,
                        isLoading: false,
                    })
                }
            )
    }
    
    handleAlbumClick(event) {
        const { id, title } = event.target.dataset;
        this.setState({ isLoading: true }, () => {
            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
                .then(response => response.json())
                .then(
                    (photos) => {
                        this.setState({
                            albumId: id, 
                            albumTitle: title,
                            isAlbumPage: false,
                            isLoading: false,
                            numOfPhotos: photos.length,
                            pageNumber: 1,
                            photos: photos.slice(0, 18),
                        })
                    },
                    (error) => {
                        this.setState({
                            error,
                            isLoading: false,
                        })
                    }
                );
        });
    }

    handlePageClick(event) {
        const { id } = event.target.dataset;
        const { albumId, pageNumber } = this.state;
        const value = id === 'back' ? -1 : 1;
        this.setState({ isLoading: true }, () => {
            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_page=${pageNumber+value}&_limit=18`)
                .then(response => response.json())
                .then(
                    (photos) => {
                        this.setState({
                            isLoading: false,
                            pageNumber: pageNumber + value,
                            photos,
                        })
                    },
                    (error) => {
                        this.setState({
                            error,
                            isLoading: false,
                        })
                    }
                );
        });
    }

    resetToAlbumPage(event) {
        this.setState({ isLoading: true }, () => {
            this.setState({
                albumId: null,
                albumTitle: '',
                error: null,
                isAlbumPage: true,
                isLoading: false,
                numOfPhotos: null,
                pageNumber: null,
                photos: [],
            })
        })
    }

    render() {
        const { 
            albums,
            albumTitle,
            error,
            isAlbumPage,
            isLoading,
            name,
            numOfPhotos,
            pageNumber,
            photos,
        } = this.state;
        
        if(error) {
            return (
                <div>{`Error: ${error.message}`}</div>
            )
        }

        if(isLoading) {
            return(
                <div>
                    <Title isAlbumPage={isAlbumPage} name={name}/>
                    <div>{'Loading...'}</div>
                </div>
            )
        }

        return (
            <div>
                <Title isAlbumPage={isAlbumPage} name={name}/>
                <div className='Navigation'>
                    <Link to='/'>Back to Home</Link>
                    {isAlbumPage ? null : <div onClick={this.resetToAlbumPage}>Back to Albums</div>}
                </div>
                {isAlbumPage ?
                    <AlbumList 
                        albums={albums}
                        onAlbumClick={this.handleAlbumClick}
                    /> :
                    <div>
                        <PhotoList 
                            albumTitle={albumTitle}
                            photos={photos}
                        />
                        <Pagination 
                            numOfPhotos={numOfPhotos}
                            onPageClick={this.handlePageClick}
                            pageNumber={pageNumber}
                        />
                    </div>
                }
            </div>
        )
    }
};

export default UserPage;