import React from 'react';
import Title from './Title';
import AlbumList from './AlbumList';
import PhotoList from './PhotoList';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            albums: [],
            currentAlbumId: null,
            photos: [],
        }
    }
    
    render() {
        const { 
            currentAlbumId,
            id,
        } = this.state;
        return (
            <div>
                <Title id={id}/>
                {currentAlbumId === null ?
                    <AlbumList /> :
                    <PhotoList />
                }
            </div>
        )
    }
};

export default UserPage;