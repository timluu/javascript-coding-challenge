import React from 'react';
import Title from './Title';
import SearchBar from './SearchBar';
import User from './User';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            users: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            searchTerm: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('The submit button has been clicked.');
        console.log(`The search term is ${this.state.searchTerm}`);
    }

    render() {
        const { searchTerm, users } = this.state;
        return (
            <div>
                <Title />
                <SearchBar
                    searchTerm={searchTerm} 
                    onChange={this.handleChange}    
                    onSubmit={this.handleSubmit}
                />
                <User users={users}/>
            </div>
        )
    }
};

export default Home;