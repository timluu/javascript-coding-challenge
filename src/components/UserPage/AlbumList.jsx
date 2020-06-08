import React from 'react';

const AlbumList = (props) => {
    const {
        albums,
        onAlbumClick,
    } = props;
    return (
        <div className='Albums'>
            {albums.map((album, i) => {
                return (
                    <div
                        className={`Album-${i}`}
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