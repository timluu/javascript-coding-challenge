import React from 'react';

const Title = (props) => {
    const { name } = props;
    return (
        <div>
            {`${name}'s Photos`}
        </div>
    )
};

export default Title;