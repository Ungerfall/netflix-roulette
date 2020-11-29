import React, { useState } from 'react';
import useGenres from '../hooks/useGenres';
import { Genres } from '../models/genres';
import { Movie } from '../models/movie';
import { DateExtensions } from '../utils/DateExtensions';
import { Layout } from './EditMovie.style';

type EditMovieProps = {
    onClose: () => void,
    onSave: (movie: Movie) => void,
    movie: Movie,
};

type EditMovieState = {
    movie: Movie
};

const EditMovie: React.FC<EditMovieProps> = ({ onClose, onSave, movie }) => {
    const init: EditMovieState = {
        movie: movie
    };
    const [state, setState] = useState(init);
    const {genres} = useGenres();

    const resetMovie = () => {
        setState(prev => ({
            ...prev,
            movie: movie
        }));
    };

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setState(prev => ({ movie: { ...prev.movie, title: value } }))
    };

    const onReleaseDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { valueAsDate } = e.target;
        if (valueAsDate) {
            setState(prev => ({ movie: { ...prev.movie, release_date: valueAsDate } }));
        }
    };

    const onMovieUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setState(prev => ({ movie: { ...prev.movie, poster_path: value } }));
    };

    const onGenreChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const value: Genres = e.currentTarget.value as Genres;
        if (value) {
            setState(prev => ({ movie: { ...prev.movie, genres: [value] } }));
        }
    };

    const onOverviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setState(prev => ({ movie: { ...prev.movie, overview: value } }));
    };

    const onRuntimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setState(prev => ({ movie: { ...prev.movie, runtime: value } }));
    };

    return (
        <Layout>
            <input type="button" value="x" onClick={onClose} className="btn-close" />
            <h1>EDIT MOVIE</h1>
            <h4>MOVIE ID</h4>
            <h4>{movie.id}</h4>
            <h4>TITLE</h4>
            <input type="text" placeholder="Title here" value={state.movie.title} onChange={onTitleChange} className="input" />
            <h4>RELEASE DATE</h4>
            <input type="date"
                placeholder="Select date"
                value={DateExtensions.toYyyyMmDdFormat(state.movie.release_date)}
                onChange={onReleaseDateChange}
                className="input" />
            <h4>MOVIE URL</h4>
            <input type="text"
                placeholder="Movie URL here"
                value={state.movie.poster_path}
                onChange={onMovieUrlChange}
                className="input" />
            <h4>GENRE</h4>
            <select value={state.movie.genres ? state.movie.genres[0] : undefined} onChange={onGenreChange} className="select">
                {genres.map(genre => {
                    return <option key={genre} value={genre}>{genre}</option>;
                })}
            </select>
            <h4>OVERVIEW</h4>
            <input type="text"
                placeholder="Overview here"
                value={state.movie.overview}
                onChange={onOverviewChange}
                className="input" />
            <h4>RUNTIME</h4>
            <input type="text"
                placeholder="Runtime here"
                value={state.movie.runtime}
                onChange={onRuntimeChange}
                className="input"/>
            <div className="actions-container">
                <input type="button" value="RESET" onClick={resetMovie} className="btn-action btn-reset" />
                <input type="button" value="SAVE" onClick={() => onSave(state.movie)} className="btn-action btn-save" />
            </div>
        </Layout>
    );
}

export default EditMovie;