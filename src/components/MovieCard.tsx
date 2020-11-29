import React, { useState } from 'react';
import { MovieForMovieCard } from '../models/movie';
import { Layout } from './MovieCard.style';

type MovieCardProps = {
    movie: MovieForMovieCard,
    onEdit: (movie: MovieForMovieCard) => void,
    onDelete: (movie: MovieForMovieCard) => void,
};

type MovieCardState = {
    showDropdownMenu: boolean
};

const MovieCard: React.FC<MovieCardProps> = ({ movie, onEdit, onDelete }) => {
    const init: MovieCardState = {
        showDropdownMenu: false
    };
    const [state, setState] = useState(init);

    return (
        <Layout>
            <img src={movie.poster_path} alt="movie's poster" />
            <div className="movie-card-menu" onClick={() => {
                setState(() => ({ showDropdownMenu: true }))
            }}>
                <ul className={"dropdown-content" + (state.showDropdownMenu ? " dropdown-content-show" : "")}>
                    <input type="button" value="x"
                        onClick={(e) => {
                            e.stopPropagation();
                            setState(() => ({ showDropdownMenu: false }));
                        }} />
                    <li onClick={() => onEdit(movie)}>Edit</li>
                    <li onClick={() => onDelete(movie)}>Delete</li>
                </ul>
            </div>
            <span>{movie.title}</span>
            <span>{movie.release_date.getFullYear()}</span>
            <div>{movie.genres?.join(",")}</div>
        </Layout>
    );
}

export default MovieCard;
