import React from 'react';
import { MovieForMovieCard } from '../models/movie';
import MovieCard from './MovieCard';
import { Layout } from './MovieList.style';

type MoviesListProps = {
    movies: Record<string, MovieForMovieCard>,
    onMovieEdit: (movie: MovieForMovieCard) => void,
    onMovieDelete: (movie: MovieForMovieCard) => void,
    sortComparer: (a: MovieForMovieCard, b: MovieForMovieCard) => number,
};

const MoviesList: React.FC<MoviesListProps> = ({ movies, onMovieEdit, onMovieDelete, sortComparer }) => {
    return (
        <Layout>
            {Object.values(movies)
                .sort(sortComparer)
                .map(movie => {
                    return <MovieCard
                        onEdit={onMovieEdit}
                        onDelete={onMovieDelete}
                        movie={movie}
                        key={movie.id} />
                })}
        </Layout>
    );
};

export default MoviesList;