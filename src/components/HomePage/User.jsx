import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    const { users } = props;
    

    if(users === null) {
        return (
            <div>{"No input has been searched yet."}</div>
        )
    }

    if(users.length === 0) {
        return (
            <div>{"No results."}</div>
        )
    }
    return (
        <div>
            {users.map(user => {
                return (
                    <Link to={`/user/${user.name}_${user.id}`}>
                        <div>{user.name}</div>
                        <div>{user.company.name}</div>
                        <div>{user.company.catchPhrase}</div>
                    </Link>
                )
            })}
        </div>
    )
};

export default User;