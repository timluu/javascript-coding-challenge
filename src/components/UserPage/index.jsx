import React from 'react';
import Title from './Title';
import AlbumList from './AlbumList';
import PhotoList from './PhotoList';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        const identity = props.match.params.id.split('_');
        this.state = {
            albums: [],
            albumTitle: '',
            id: identity[1],
            isAlbumPage: true,
            isLoading: true,
            name: identity[0],
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
        const { id, title } = event.target.dataset;
        this.setState({ isLoading: true }, () => {
            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}&_page=&_limit=18`)
                .then(response => response.json())
                .then(photos => {
                    console.log(photos);
                    this.setState({ 
                        albumTitle: title,
                        isAlbumPage: false,
                        isLoading: false,
                        photos,
                    })
                });
        });
    }

    render() {
        const { 
            albums,
            albumTitle,
            isAlbumPage,
            isLoading,
            name,
            photos,
        } = this.state;
        
        if(isLoading) {
            return(
                <div>
                    <Title name={name}/>
                    <div>{'Loading...'}</div>
                </div>
            )
        }

        return (
            <div>
                <Title name={name}/>
                {isAlbumPage ?
                    <AlbumList 
                        albums={albums}
                        onAlbumClick={this.handleAlbumClick}
                    /> :
                    <PhotoList 
                        albumTitle={albumTitle}
                        photos={photos}
                    />
                }
            </div>
        )
    }
};

export default UserPage;