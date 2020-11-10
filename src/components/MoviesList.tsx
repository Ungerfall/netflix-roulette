import React, { Component } from 'react';
import { Movie } from '../models/movie';
import '../App.css';
import MovieCard from './MovieCard';

type MoviesListProps = {
    movies: Movie[]
};

class MoviesList extends Component<MoviesListProps> {
    render() {
        return (
            <div className="movies-container">
                {this.props.movies.map(movie => {
                    return <MovieCard movie={movie} key={movie.id}/>
                })}
            </div>
        );
    }
}

export default MoviesList;