import React from 'react';

const PhotoList = (props) => {
    const { albumTitle, photos } = props;
    return (
        <div className='Photos'>
            {photos.map((photo, i) => {
                return (
                    <div className={`Photo-${i}`}>
                        <img src={photo.thumbnailUrl} alt='' />
                        <div>{photo.title}</div>
                        <div>{albumTitle}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default PhotoList;