import React, { Component } from 'react';
import { Movie } from '../models/movie';
import './../App.css';

type MovieCardProps = {
    movie: Movie
};

type MovieCardState = {
    showDropdownMenu: boolean
};

class MovieCard extends Component<MovieCardProps, MovieCardState> {
    state: MovieCardState = {
        showDropdownMenu: false
    };

    render() {
        return (
            <div className="movie-card">
                <img src={this.props.movie.imageSrc} alt="movie's poster" />
                <div className="movie-card-menu" onClick={() => {
                    this.setState(() => ({ showDropdownMenu: true }))
                }}>
                    <ul className={"dropdown-content" + (this.state.showDropdownMenu ? " dropdown-content-show" : "")}>
                        <input type="button" value="x"
                            onClick={(e) => {
                                e.stopPropagation();
                                this.setState(() => ({ showDropdownMenu: false }));
                            }} />
                        <li>Edit</li>
                        <li>Delete</li>
                    </ul>
                </div>
                <span>{this.props.movie.title}</span>
                <span>{this.props.movie.releaseDate.getFullYear()}</span>
                <div>{this.props.movie.genres.join(",")}</div>
            </div>
        );
    }
}

export default MovieCard;
