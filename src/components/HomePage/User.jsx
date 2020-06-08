import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    const { users } = props;
    

    if(users === null) {
        return (
            <div className='NoItems'>{"No input has been searched yet."}</div>
        )
    }

    if(users.length === 0) {
        return (
            <div className='NoItems'>{"No results."}</div>
        )
    }
    return (
        <div className='UserListings'>
            {users.map(user => {
                return (
                    <Link className='UserItem' to={`/user/${user.name}_${user.id}`}>
                        <div className='UserName'>{user.name}</div>
                        <div className='UserCompany'>{user.company.name}</div>
                        <div className='UserPhrase'>{user.company.catchPhrase}</div>
                    </Link>
                )
            })}
        </div>
    )
};

export default User;