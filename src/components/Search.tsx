import React from 'react';
import { Button, TextInput } from './Search.style';

const Search: React.FC = () => {
    return (
        <>
        <TextInput id="txt-search" placeholder="What do you want to watch?" />
        <Button id="btn-search" value="SEARCH" />
        </>
    );
};

export default Search;