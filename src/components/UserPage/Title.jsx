import React from 'react';

const Title = (props) => {
    const { id } = props;
    return (
        <div>{`User Page ${id}`}</div>
    )
};

export default Title;