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
                        data-id={album.id}
                        data-title={album.title}
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