import React, { Component } from 'react';
import styled from 'styled-components';
import { GenresUtils } from '../models/genres';

const Container = styled.main`
    background-color: #232323;
    margin-top: 120px;
    margin-right: 20%;
    margin-bottom: 120px;
    margin-left: 20%;
    height: 1000px;
    color: #FFFFFF;
`;

const CloseButton = styled.input.attrs(props => ({
    type: "button",
    value: "x"
}))`
    background-color: #232323;
    color: #FFFFFF;
    font-size: 2em;
    float: right;
    outline: none;
    border-style: none;
    margin-right: 30px;
    margin-top: 30px;
`;

const AddMovieLabel = styled.h1`
    margin-left: 75px;
    padding-top: 100px;
`;

const Label = styled.h4`
    color: #F65261;
    margin-left: 75px;
`;

const Input = styled.input`
    margin-left: 75px;
    color: #FFFFFF;
    height: 40px;
    border-radius: 4px;
    background-color: #434343;
    border-style: none;
    width: calc(100% - 150px);
    padding-left: 15px;
`;

const GenreSelect = styled.select`
    margin-left: 75px;
    color: #FFFFFF;
    height: 40px;
    border-radius: 4px;
    background-color: #434343;
    border-style: none;
    width: calc(100% - 135px);
    padding-left: 15px;
`;

class AddMovie extends Component {
    render() {
        return (
            <Container>
                <CloseButton />
                <AddMovieLabel>ADD MOVIE</AddMovieLabel>
                <Label>TITLE</Label>
                <Input type="text" placeholder="Title here" />
                <Label>RELEASE DATE</Label>
                <Input type="date" placeholder="Select date" />
                <Label>MOVIE URL</Label>
                <Input type="text" placeholder="Movie URL here" />
                <Label>GENRE</Label>
                <GenreSelect>
                    {GenresUtils.GenresValues().map(genre => {
                        console.log(genre);
                        return <option value={genre}>{genre}</option>;
                    })}
                </GenreSelect>
                <Label>OVERVIEW</Label>
                <Input type="text" placeholder="Overview here" />
                <Label>RUNTIME</Label>
                <Input type="text" placeholder="Runtime here" />
            </Container>
        );
    }
}

export default AddMovie;