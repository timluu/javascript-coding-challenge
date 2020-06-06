import React from 'react';

const SearchBar = (props) => {
    const {
        searchTerm,
        onChange,
        onSubmit,
    } = props;

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                value={searchTerm}
                name="searchText"
                onChange={onChange} 
            />
            <input type="submit" value="Search" />
        </form>
    )
};

export default SearchBar;