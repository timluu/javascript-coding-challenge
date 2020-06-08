import React from 'react';

const Pagination = (props) => {
    const {
        numOfPhotos,
        onPageClick,
        pageNumber,
    } = props;

    return (
        <div className='Navigation'>
            {pageNumber !== 1 ?
                <div 
                    data-id={'back'}
                    onClick={onPageClick}
                >
                    {'< BACK'}
                </div>
                : <div></div>
            }
            {(pageNumber * 18) < numOfPhotos ?
                <div 
                    data-id={'forward'}
                    onClick={onPageClick}
                >
                    {'FORWARD >'}
                </div>
                : <div></div>
            }
        </div>
    )
}

export default Pagination;