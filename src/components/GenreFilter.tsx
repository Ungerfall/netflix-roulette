import React, { useState } from 'react';
import { Layout, BottomLine } from './GenreFilter.style';
import { Genres } from '../models/genres';

type GenreFilterState = {
    selected: Genres
    filterValues: Genres[]
};

type GenreFilterProps = {
    onSortByChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
};

const GenreFilter: React.FC<GenreFilterProps> = ({ onSortByChange }) => {
    const init: GenreFilterState = {
        selected: Genres.all,
        filterValues: [
            Genres.all,
            Genres.documentary,
            Genres.comedy,
            Genres.horror,
            Genres.crime,
        ]
    };
    const [state, setState] = useState(init);

    const setSelected = (genre: Genres) => {
        setState(prev => ({
            ...prev,
            selected: genre,
        }))
    };

    return (
        <>
        <Layout>
            <div className="radio">
                {state.filterValues.map(genre => {
                    return (
                        <label key={genre} onClick={() => setSelected(genre)}>{genre.toUpperCase()}
                            <div className={
                                state.selected === genre
                                    ? "checked"
                                    : ""} />
                        </label>
                    );
                })}
            </div>
            <div className="sortby">
                <span>SORT BY</span>
                <select onChange={onSortByChange}>
                    <option value="releaseDate">RELEASE DATE</option>
                    <option value="genre">GENRE</option>
                    <option value="title">TITLE</option>
                </select>
            </div>
        </Layout>
        <BottomLine />
        </>
    );
}

export default GenreFilter;