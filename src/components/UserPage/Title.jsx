import React from 'react';

const Title = (props) => {
    const { isAlbumPage, name } = props;
    const section = isAlbumPage ? 'Albums' : 'Photos';
    return (
        <div className='Title'>
            {`${name}'s ${section}`}
        </div>
    )
};

export default Title;