import React from 'react';

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
                    <div>
                        <div>{user.name}</div>
                        <div>{user.company.name}</div>
                        <div>{user.company.catchPhrase}</div>
                    </div>
                )
            })}
        </div>
    )
};

export default User;