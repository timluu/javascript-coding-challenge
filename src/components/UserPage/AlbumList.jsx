import React from 'react';
import { Link } from 'react-router-dom';

const AlbumList = (props) => {
    const {
        albums,
        name,
        onAlbumClick,
        userId,
    } = props;
    return (
        <div className='Albums'>
            {albums.map((album, i) => {
                return (
                    <Link 
                        to={`/user/${name}_${userId}/${album.id}/1`}
                        className={`Album-${i}`}
                        data-id={album.id}
                        data-title={album.title}
                        onClick={onAlbumClick}
                    >
                        {album.title}
                    </Link>
                )
            })}
        </div>
    )
}

export default AlbumList;