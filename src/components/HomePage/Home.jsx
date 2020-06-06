import React from 'react';
import Title from './Title';
import SearchBar from './SearchBar';
import User from './User';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <SearchBar />
                <User />
            </div>
        )
    }
};

export default Home;