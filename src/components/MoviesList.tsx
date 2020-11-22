import React, { Component } from 'react';
import { MovieForMovieCard } from '../models/movie';
import '../App.css';
import MovieCard from './MovieCard';

type MoviesListProps = {
    movies: Record<string, MovieForMovieCard>,
    onMovieEdit: (movie: MovieForMovieCard) => void,
    onMovieDelete: (movie: MovieForMovieCard) => void,
};

class MoviesList extends Component<MoviesListProps> {
    render() {
        return (
            <div className="movies-container">
                {Object.values(this.props.movies).map(movie => {
                    return <MovieCard
                        onEdit={this.props.onMovieEdit}
                        onDelete={this.props.onMovieDelete}
                        movie={movie}
                        key={movie.id}/>
                })}
            </div>
        );
    }
}

export default MoviesList;