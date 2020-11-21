import React, { Component } from 'react';
import '../App.css';
import { Genres } from '../models/genres';

const filterValues: Genres[] = [
    Genres.all,
    Genres.documentary,
    Genres.comedy,
    Genres.horror,
    Genres.crime,
];

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
                        {filterValues.map(genre =>{
                            return (
                                <label key={genre} onClick={() => this.setSelected(genre)}>{genre.toUpperCase()}
                                    <div style={
                                        this.state.selected === genre
                                        ? genreCheckedStyle
                                        : genreEmptyStyle} />
                                </label>
                            );
                        })}
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
        this.setState(() => ({
            selected: genre,
        }))
    };
}

export default GenreFilter;