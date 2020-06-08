import React from 'react';

const AlbumList = (props) => {
    const {
        albums,
        onAlbumClick,
    } = props;
    return (
        <div>
            {albums.map(album => {
                return (
                    <div
                        id={album.id}
                        onClick={onAlbumClick}
                    >
                        {album.title}
                    </div>
                )
            })}
        </div>
    )
}

export default AlbumList;