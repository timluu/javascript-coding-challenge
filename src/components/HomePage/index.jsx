import React from 'react';
import Title from './Title';
import SearchBar from './SearchBar';
import User from './User';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            users: null,
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
        const { searchTerm } = this.state;
        const keyword = searchTerm.toLowerCase();
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                users = this.filterUsers(users, keyword);
                this.setState({ users });
            })
    }

    filterUsers(users, keyword) {
        return users.filter(user => {
            const name = user.name.toLowerCase()
            return name.includes(keyword);
        })
    }

    render() {
        const { searchTerm, users } = this.state;
        return (
            <div className='HomePage'>
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

export default HomePage;