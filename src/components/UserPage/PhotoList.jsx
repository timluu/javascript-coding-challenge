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
    
    // const grid = [];
    // let row = []
    // photos.forEach((photo, i) => {
    //     if(i % 3 === 0 && i !== 0) { 
    //         row = [];
    //     }
    //     row.push((
    //         <div className={'Photo'}>
    //             <img src={photo.thumbnailUrl} alt='' />
    //             <div>{photo.title}</div>
    //             <div>{albumTitle}</div>
    //         </div>
    //     ));
    //     if(row.length === 3 || i === photos.length - 1) { grid.push(row) }
    // });
    // return (
    //     <div className={'Photos'}>
    //         {grid.map((rowOfPhotos, i) => {
    //             return (
    //                 <div className={`Photos-${i}`}>{rowOfPhotos}</div>
    //             )
    //         })}
    //     </div>
    // )
}

export default PhotoList;