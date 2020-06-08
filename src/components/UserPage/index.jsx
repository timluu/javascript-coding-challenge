import React from 'react';
import Title from './Title';
import AlbumList from './AlbumList';
import PhotoList from './PhotoList';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            id: props.match.params.id,
            isAlbumPage: true,
            isLoading: true,
            photos: [],
        }

        this.handleAlbumClick = this.handleAlbumClick.bind(this);
    }

    componentDidMount() {
        const { id } = this.state;
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
            .then(response => response.json())
            .then(albums => {
                this.setState({ 
                    albums,
                    isLoading: false,
                })
            });
    }
    
    handleAlbumClick(event) {
        const { id } = event.target;
        this.setState({ isLoading: true }, () => {
            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}&_page=2&_limit=18`)
                .then(response => response.json())
                .then(photos => {
                    console.log(photos);
                    this.setState({ 
                        photos,
                        isAlbumPage: false,
                        isLoading: false,
                    })
                });
        });
    }

    render() {
        const { 
            albums,
            id,
            isAlbumPage,
            isLoading,
            photos,
        } = this.state;
        
        if(isLoading) {
            return(
                <div>
                    <Title id={id} />
                    <div>{'Loading...'}</div>
                </div>
            )
        }

        return (
            <div>
                <Title id={id}/>
                {isAlbumPage ?
                    <AlbumList 
                        albums={albums}
                        onAlbumClick={this.handleAlbumClick}
                    /> :
                    <PhotoList photos={photos}/>
                }
            </div>
        )
    }
};

export default UserPage;