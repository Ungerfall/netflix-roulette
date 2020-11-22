import React, { Component } from 'react';
import styled from 'styled-components';
import { Genres } from '../models/genres';
import { Movie } from '../models/movie';
import { DateExtensions } from '../utils/DateExtensions';
import { GenresExtensions } from '../utils/GenresExtensions';

const Container = styled.main`
    background-color: #232323;
    margin-top: 120px;
    margin-right: 20%;
    margin-bottom: 120px;
    margin-left: 20%;
    height: 1100px;
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

const EditMovieLabel = styled.h1`
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

const ButtonsContainer = styled.div`
    float: right;
    margin-right: 75px;
    margin-top: 100px;
`;

const ButtonBase = styled.input.attrs(props => ({
    type: "button"
}))`
    display: inline-block;
    border-style: solid;
    border-radius: 4px;
    border-color: #F65261;
    color: #F65261;
    width: 160px;
    height: 50px;
    font-size: large;
`;

const ResetButton = styled(ButtonBase)`
    background-color: #232323;
    margin-right: 5px;
`;

const SaveButton = styled(ButtonBase)`
    background-color: #F65261;
    color: #FFFFFF;
`;

type EditMovieProps = {
    onClose: () => void,
    onSave: (movie: Movie) => void,
    movie: Movie,
};

type EditMovieState = {
    movie: Movie
};

class EditMovie extends Component<EditMovieProps, EditMovieState> {
    state: EditMovieState = {
        movie: this.props.movie
    };

    resetMovie = () => {
        this.setState(prev => ({
            ...prev,
            movie: this.props.movie
        }));
    };

    onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        this.setState(prev => ({ movie: { ...prev.movie, title: value } }))
    };

    onReleaseDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { valueAsDate } = e.target;
        if (valueAsDate) {
            this.setState(prev => ({ movie: { ...prev.movie, releaseDate: valueAsDate } }));
        }
    };

    onMovieUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        this.setState(prev => ({ movie: { ...prev.movie, imageSrc: value } }));
    };

    onGenreChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const value: Genres = e.currentTarget.value as Genres;
        if (value) {
            this.setState(prev => ({ movie: { ...prev.movie, genre: value } }));
        }
    };

    onOverviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        this.setState(prev => ({ movie: { ...prev.movie, overview: value } }));
    };

    onRuntimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        this.setState(prev => ({ movie: { ...prev.movie, runtime: value } }));
    };

    render() {
        return (
            <Container>
                <CloseButton onClick={this.props.onClose} />
                <EditMovieLabel>EDIT MOVIE</EditMovieLabel>
                <Label>MOVIE ID</Label>
                <Label>{this.props.movie.id}</Label>
                <Label>TITLE</Label>
                <Input type="text" placeholder="Title here" value={this.state.movie.title} onChange={this.onTitleChange} />
                <Label>RELEASE DATE</Label>
                <Input type="date"
                    placeholder="Select date"
                    value={DateExtensions.toYyyyMmDdFormat(this.state.movie.releaseDate)}
                    onChange={this.onReleaseDateChange} />
                <Label>MOVIE URL</Label>
                <Input type="text"
                    placeholder="Movie URL here"
                    value={this.state.movie.imageSrc}
                    onChange={this.onMovieUrlChange} />
                <Label>GENRE</Label>
                <GenreSelect value={this.state.movie.genre} onChange={this.onGenreChange}>
                    {GenresExtensions.GenresValues().map(genre => {
                        return <option key={genre} value={genre}>{genre}</option>;
                    })}
                </GenreSelect>
                <Label>OVERVIEW</Label>
                <Input type="text"
                    placeholder="Overview here"
                    value={this.state.movie.overview}
                    onChange={this.onOverviewChange} />
                <Label>RUNTIME</Label>
                <Input type="text"
                    placeholder="Runtime here"
                    value={this.state.movie.runtime}
                    onChange={this.onRuntimeChange} />
                <ButtonsContainer>
                    <ResetButton value="RESET" onClick={this.resetMovie} />
                    <SaveButton value="SAVE" onClick={() => this.props.onSave(this.state.movie)} />
                </ButtonsContainer>
            </Container>
        );
    }
}

export default EditMovie;