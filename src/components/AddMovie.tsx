import React, { useState } from 'react';
import { Genres } from '../models/genres';
import { Movie } from '../models/movie';
import { DateExtensions } from '../utils/DateExtensions';
import { GenresExtensions } from '../utils/GenresExtensions';
import { uuidv4 } from '../utils/uuid';
import { Layout } from './AddMovie.style';

type AddMovieProps = {
    onClose: () => void,
    onSubmit: (movie: Movie) => void,
};

type AddMovieState = {
    movie: Movie
};

const AddMovie: React.FC<AddMovieProps> = ({ onClose, onSubmit }) => {
    const init: AddMovieState = {
        movie: {
            genre: Genres.all,
            title: "",
            releaseDate: new Date(),
            imageSrc: "",
            overview: "",
            runtime: "",
            id: uuidv4(),
        }
    };
    const [state, setState] = useState(init);

    const resetMovie = () => {
        setState(prev => ({
            ...prev,
            movie: {
                genre: Genres.all,
                title: "",
                releaseDate: new Date(),
                imageSrc: "",
                overview: "",
                runtime: "",
                id: uuidv4(),
            }
        }))
    };

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setState(prev => ({ movie: { ...prev.movie, title: value } }))
    };

    const onReleaseDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { valueAsDate } = e.target;
        if (valueAsDate) {
            setState(prev => ({ movie: { ...prev.movie, releaseDate: valueAsDate } }));
        }
    };

    const onMovieUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setState(prev => ({ movie: { ...prev.movie, imageSrc: value } }));
    };

    const onGenreChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const value: Genres = e.currentTarget.value as Genres;
        if (value) {
            setState(prev => ({ movie: { ...prev.movie, genre: value } }));
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
            <h1>ADD MOVIE</h1>
            <h4>TITLE</h4>
            <input type="text"
                placeholder="Title here"
                value={state.movie.title}
                onChange={onTitleChange}
                className="input" />
            <h4>RELEASE DATE</h4>
            <input type="date"
                placeholder="Select date"
                value={DateExtensions.toYyyyMmDdFormat(state.movie.releaseDate)}
                onChange={onReleaseDateChange}
                className="input" />
            <h4>MOVIE URL</h4>
            <input type="text"
                placeholder="Movie URL here"
                value={state.movie.imageSrc}
                onChange={onMovieUrlChange}
                className="input" />
            <h4>GENRE</h4>
            <select value={state.movie.genre} onChange={onGenreChange} className="select">
                {GenresExtensions.GenresValues().map(genre => {
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
                className="input" />
            <div className="actions-container">
                <input type="button" value="RESET" onClick={resetMovie} className="btn-action btn-reset" />
                <input type="button" value="SUBMIT" onClick={() => onSubmit(state.movie)} className="btn-action btn-submit" />
            </div>
        </Layout>
    );
}

export default AddMovie;