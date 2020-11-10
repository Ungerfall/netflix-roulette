import React, { Component } from 'react';
import '../App.css';
import { Genres } from '../models/genres';

const genreCheckedStyle = {
    height: '5px',
    backgroundColor: '#F65261',
};

const genreEmptyStyle = { };

type GenreFilterState = {
    selected: Genres
};

type GenreFilterProps = { };

class GenreFilter extends Component<GenreFilterProps, GenreFilterState> {
    state: GenreFilterState = {
        selected: Genres.all
    };

    render() {
        return (
            <>
                <div id="genre-filter-container">
                    <div id="genre-filter-radio">
                        <label onClick={() => this.setSelected(Genres.all)}>{Genres.all}
                            <div style={
                                this.state.selected === Genres.all
                                ? genreCheckedStyle
                                : genreEmptyStyle} />
                        </label>
                        <label onClick={() => this.setSelected(Genres.documentary)}>{Genres.documentary}
                            <div style={
                                this.state.selected === Genres.documentary
                                ? genreCheckedStyle
                                : genreEmptyStyle} />
                        </label>
                        <label onClick={() => this.setSelected(Genres.comedy)}>{Genres.comedy}
                            <div style={
                                this.state.selected === Genres.comedy
                                ? genreCheckedStyle
                                : genreEmptyStyle} />
                        </label>
                        <label onClick={() => this.setSelected(Genres.horror)}>{Genres.horror}
                            <div style={
                                this.state.selected === Genres.horror
                                ? genreCheckedStyle
                                : genreEmptyStyle} />
                        </label>
                        <label onClick={() => this.setSelected(Genres.crime)}>{Genres.crime}
                            <div style={
                                this.state.selected === Genres.crime
                                ? genreCheckedStyle
                                : genreEmptyStyle} />
                        </label>
                    </div>
                    <div id="genre-filter-sortby">
                        <span>SORT BY</span>
                        <select id="sort-by">
                            <option value="releaseDate">RELEASE DATE</option>
                            <option value="genre">GENRE</option>
                            <option value="title">TITLE</option>
                        </select>
                    </div>
                </div>
                <div id="genre-filter-line"></div>
            </>
        );
    }

    setSelected = (genre: Genres) => {
        this.setState((state) => ({
            selected: genre,
        }))
    };
}

export default GenreFilter;