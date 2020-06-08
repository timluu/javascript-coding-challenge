import React from 'react';

const SearchBar = (props) => {
    const {
        searchTerm,
        onChange,
        onSubmit,
    } = props;

    return (
        <form className='Search' onSubmit={onSubmit}>
            <input 
                className='SearchBar'
                type="text" 
                value={searchTerm}
                name="searchText"
                onChange={onChange} 
            />
            <input className='SearchButton' type="submit" value="Search" />
        </form>
    )
};

export default SearchBar;