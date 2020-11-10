import React from 'react';
import Footer from '../components/Footer';
import MoviesList from '../components/MoviesList';
import Search from '../components/Search';
import { Movie } from '../models/movie';
import '../App.css';
import GenreFilter from '../components/GenreFilter';

const imagePlaceholder: string = "http://placehold.it/325x450?text=movie-poster";

const movies: Movie[] = [
    {
        title: "Pulp Fiction",
        genres: ["Action & Adventure"],
        releaseDate: new Date(2004, 12, 22),
        imageSrc: imagePlaceholder,
        id: "e2alh2_0"
    },
    {
        title: "Bohemian Rhapsody",
        genres: ["Drama", "Biography", "Music"],
        releaseDate: new Date(2003, 12, 22),
        imageSrc: imagePlaceholder,
        id: "e2alh2_1"
    },
    {
        title: "Kill Bill: Vol 2",
        genres: ["Oscar winning Movie"],
        releaseDate: new Date(1994, 12, 22),
        imageSrc: imagePlaceholder,
        id: "e2alh2_2"
    },
    {
        title: "Reservoir dogs",
        genres: ["Oscar winning movie"],
        releaseDate: new Date(1994, 12, 22),
        imageSrc: imagePlaceholder,
        id: "e2alh2_3"
    },
    {
        title: "Inception",
        genres: ["Action & Adventure"],
        releaseDate: new Date(2003, 12, 22),
        imageSrc: imagePlaceholder,
        id: "e2alh2_4"
    },
];

const foundCount: number = movies.length;

function App() {
    return (
        <>
            <header id="header">
                <span className="netflix netflix-color">netflix</span>
                <span className="netflix-color">roulette</span>
                <input type="button" id="btn-add-movie" value="+ ADD MOVIE" />
                <div>
                    <p id="find-your-movie">FIND YOR MOVIE</p>
                    <Search />
                </div>
            </header>
            <main id="main">
                <GenreFilter />
                <p><b>{foundCount}</b> movies found</p>
                <MoviesList movies={movies} />
            </main>
            <Footer />
        </>
    );
}

export default App;
