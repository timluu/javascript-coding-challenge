import React from 'react';

const Pagination = (props) => {
    const {
        numOfPhotos,
        onPageClick,
        pageNumber,
    } = props;

    return (
        <div>
            {pageNumber !== 1 ?
                <div 
                    data-id={"back"}
                    onClick={onPageClick}
                >
                    {"<<<"}
                </div>
                : null
            }
            {(pageNumber * 18) < numOfPhotos ?
                <div 
                    data-id={"forward"}
                    onClick={onPageClick}
                >
                    {">>>"}
                </div>
                : null
            }
        </div>
    )
}

export default Pagination;