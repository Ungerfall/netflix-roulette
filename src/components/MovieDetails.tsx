import React from 'react';
import { Movie } from '../models/movie';
import { Layout } from './MovieDetails.style';

type MovieDetailsProps = {
    movie: Movie,
    onSearchIconClick: () => void,
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onSearchIconClick }) => {

    return (
        <Layout>
            <input type="button" value="&#x2315;" onClick={onSearchIconClick} />
            <img src={movie.poster_path} alt="movie's poster" />
            <div>
                <h1>{movie.title}</h1>
                <span>{movie.vote_average}</span>
                <h4>{movie.genres?.join(",")}</h4>
                <h3 className="color-red">{movie.release_date.getFullYear()}</h3>
                <span className="color-red">{movie.runtime + " min"}</span>
                <p>{movie.overview}</p>
            </div>
        </Layout>
    );
};

export default MovieDetails;