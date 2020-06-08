import React from 'react';
import { Link } from 'react-router-dom'

const Pagination = (props) => {
    const {
        albumId,
        name,
        numOfPhotos,
        onPageClick,
        pageNumber,
        userId
    } = props;

    return (
        <div className='Navigation'>
            {pageNumber !== 1 ?
                <Link
                    to={`/user/${name}_${userId}/${albumId}/${pageNumber-1}`}
                    data-id={'back'}
                    onClick={onPageClick}
                >
                    {'< BACK'}
                </Link>
                : <div></div>
            }
            {(pageNumber * 18) < numOfPhotos ?
                <Link
                to={`/user/${name}_${userId}/${albumId}/${pageNumber+1}`}
                    data-id={'forward'}
                    onClick={onPageClick}
                >
                    {'FORWARD >'}
                </Link>
                : <div></div>
            }
        </div>
    )
}

export default Pagination;