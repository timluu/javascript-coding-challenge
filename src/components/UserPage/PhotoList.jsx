import React from 'react';

const PhotoList = (props) => {
    const { albumTitle, photos } = props;
    console.log(albumTitle);
    return (
        <div>
            {photos.map(photo => {
                return (
                    <div>
                        <div>{photo.id}</div>
                        <div>{photo.title}</div>
                        <div>{albumTitle}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default PhotoList;