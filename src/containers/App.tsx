import React, { Component } from 'react';
import Footer from '../components/Footer';
import MoviesList from '../components/MoviesList';
import Search from '../components/Search';
import { Movie, MovieForMovieCard } from '../models/movie';
import '../App.css';
import GenreFilter from '../components/GenreFilter';
import Header from '../components/Header';
import AddMovie from '../components/AddMovie';
import { Genres } from '../models/genres';
import { uuidv4 } from '../utils/uuid';
import EditMovie from '../components/EditMovie';
import DeleteMovie from '../components/DeleteMovie';
import { datesComparer, stringComparer } from '../utils/comparers';

const imagePlaceholder: string = "http://placehold.it/325x450?text=movie-poster";

const moviesStub: Movie[] = [
    {
        title: "Pulp Fiction",
        genre: Genres.actionAndAdventure,
        releaseDate: new Date(2004, 12, 22),
        imageSrc: imagePlaceholder,
        id: uuidv4(),
        overview: "",
        runtime: "",
    },
    {
        title: "Bohemian Rhapsody",
        genre: Genres.drama,
        releaseDate: new Date(2003, 12, 22),
        imageSrc: imagePlaceholder,
        id: uuidv4(),
        overview: "",
        runtime: "",
    },
    {
        title: "Kill Bill: Vol 2",
        genre: Genres.drama,
        releaseDate: new Date(1994, 12, 22),
        imageSrc: imagePlaceholder,
        id: uuidv4(),
        overview: "",
        runtime: "",
    },
    {
        title: "Reservoir dogs",
        genre: Genres.drama,
        releaseDate: new Date(1994, 12, 22),
        imageSrc: imagePlaceholder,
        id: uuidv4(),
        overview: "",
        runtime: "",
    },
    {
        title: "Inception",
        genre: Genres.actionAndAdventure,
        releaseDate: new Date(2003, 12, 22),
        imageSrc: imagePlaceholder,
        id: uuidv4(),
        overview: "",
        runtime: "",
    },
];

const moviesDict: Record<string, Movie> = moviesStub
    .reduce(
        (acc, item) => {
            acc[item.id] = item;
            return acc;
        },
        {} as Record<string, Movie>);

const foundCount: number = moviesStub.length;

enum AppContextType {
    Main = 1,
    AddMovie,
    EditMovie,
    DeleteMovie,
}

type AppProps = {};

type AppState = {
    contextType: AppContextType,
    movies: Record<string, Movie>,
    selectedMovie: Movie | undefined,
    moviesSortComparer: (a: MovieForMovieCard, b: MovieForMovieCard) => number,
};

class App extends Component<AppProps, AppState> {
    state: AppState = {
        contextType: AppContextType.Main,
        movies: moviesDict,
        selectedMovie: undefined,
        moviesSortComparer: (a, b) => datesComparer(a.releaseDate, b.releaseDate),
    };

    closeModal = () => {
        this.setState(prev => ({ ...prev, contextType: AppContextType.Main }))
    };

    submitAddMovie = (movie: Movie) => {
        this.setState(prev => ({
            ...prev,
            contextType: AppContextType.Main,
            movies: { ...prev.movies, [movie.id]: movie }
        }))
    };

    saveEditMovie = (movie: Movie) => {
        this.setState(prev => ({
            ...prev,
            contextType: AppContextType.Main,
            movies: { ...prev.movies, [movie.id]: movie }
        }));
    };

    clickMovieCardEdit = (movie: MovieForMovieCard) => {
        this.setState(prev => ({
            ...prev,
            contextType: AppContextType.EditMovie,
            selectedMovie: movie as Movie
        }));
    };

    clickMovieCardDelete = (movie: MovieForMovieCard) => {
        this.setState(prev => ({
            ...prev,
            contextType: AppContextType.DeleteMovie,
            selectedMovie: movie as Movie
        }));
    };

    confirmDelete = () => {
        this.setState(prev => {
            const key = prev.selectedMovie?.id as string;
            const {[key]: value, ...remaning} = prev.movies;
            return ({
                ...prev,
                contextType: AppContextType.Main,
                selectedMovie: undefined,
                movies: remaning
            })
        });
    };

    onSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value: string = e.currentTarget.value as string;
        if (value) {
            this.setState(prev => {
                let comparer: (a: MovieForMovieCard, b: MovieForMovieCard) => number;
                if (value === "releaseDate") {
                    comparer = (a, b) => datesComparer(a.releaseDate, b.releaseDate);
                }
                else if (value === "genre") {
                    comparer = (a, b) => stringComparer(a.genre, b.genre);
                }
                else {
                    comparer = (a, b) => stringComparer(a.title, b.title);
                }

                return ({
                    ...prev,
                    moviesSortComparer: comparer
                });
            });
        }
    };

    render() {
        return (
            <>
                <Header />
                {this.state.contextType === AppContextType.AddMovie
                    ? <AddMovie onClose={this.closeModal}
                        onSubmit={this.submitAddMovie} />
                    : this.state.contextType === AppContextType.EditMovie
                    ? <EditMovie onClose={this.closeModal}
                        onSave={this.saveEditMovie}
                        movie={this.state.selectedMovie as Movie} />
                    : this.state.contextType === AppContextType.DeleteMovie
                    ? <DeleteMovie onConfirm={this.confirmDelete}
                        onClose={this.closeModal}/>
                    :
                    <main id="main">
                        <input type="button" id="btn-add-movie" value="+ ADD MOVIE"
                            onClick={() => this.setState(prev => ({ ...prev, contextType: AppContextType.AddMovie }))} />
                        <p id="find-your-movie">FIND YOR MOVIE</p>
                        <Search />
                        <GenreFilter onSortByChange={this.onSortByChange} />
                        <p><b>{foundCount}</b> movies found</p>
                        <MoviesList movies={this.state.movies}
                            onMovieEdit={this.clickMovieCardEdit}
                            onMovieDelete={this.clickMovieCardDelete}
                            sortComparer={this.state.moviesSortComparer} />
                    </main>
                }
                <Footer />
            </>
        );
    }
};

export default App;
