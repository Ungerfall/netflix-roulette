import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <>
            <input type="text" id="txt-search" placeholder="What do you want to watch?" />
            <input type="button" id="btn-search" value="SEARCH" />
            </>
        );
    }
}

export default Search;