import React from 'react';

const PhotoList = (props) => {
    const { photos } = props;
    return (
        <div>
            {photos.map(photo => {
                return (
                    <div>
                        <div>{photo.id}</div>
                        <div>{photo.title}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default PhotoList;