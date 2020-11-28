import React, {  useState } from 'react';
import Footer from '../components/Footer';
import MoviesList from '../components/MoviesList';
import Search from '../components/Search';
import { Movie, MovieForMovieCard, moviesStub } from '../models/movie';
import '../App.css';
import GenreFilter from '../components/GenreFilter';
import Header from '../components/Header';
import AddMovie from '../components/AddMovie';
import EditMovie from '../components/EditMovie';
import DeleteMovie from '../components/DeleteMovie';
import { datesComparer, stringComparer } from '../utils/comparers';
import { AppContextType } from '../models/appContext';

const moviesDict: Record<string, Movie> = moviesStub
    .reduce(
        (acc, item) => {
            acc[item.id] = item;
            return acc;
        },
        {} as Record<string, Movie>);

const foundCount: number = moviesStub.length;

type AppProps = {};

type AppState = {
    contextType: AppContextType,
    movies: Record<string, Movie>,
    selectedMovie: Movie | undefined,
    moviesSortComparer: (a: MovieForMovieCard, b: MovieForMovieCard) => number,
};

const App: React.FC<AppProps> = () => {
    const init: AppState = {
        contextType: AppContextType.Main,
        movies: moviesDict,
        selectedMovie: undefined,
        moviesSortComparer: (a, b) => datesComparer(a.releaseDate, b.releaseDate),
    };
    const [state, setState] = useState(init);

    const closeModal = () => {
        setState(prev => ({ ...prev, contextType: AppContextType.Main }))
    };

    const submitAddMovie = (movie: Movie) => {
        setState(prev => ({
            ...prev,
            contextType: AppContextType.Main,
            movies: { ...prev.movies, [movie.id]: movie }
        }))
    };

    const saveEditMovie = (movie: Movie) => {
        setState(prev => ({
            ...prev,
            contextType: AppContextType.Main,
            movies: { ...prev.movies, [movie.id]: movie }
        }));
    };

    const clickMovieCardEdit = (movie: MovieForMovieCard) => {
        setState(prev => ({
            ...prev,
            contextType: AppContextType.EditMovie,
            selectedMovie: movie as Movie
        }));
    };

    const clickMovieCardDelete = (movie: MovieForMovieCard) => {
        setState(prev => ({
            ...prev,
            contextType: AppContextType.DeleteMovie,
            selectedMovie: movie as Movie
        }));
    };

    const confirmDelete = () => {
        setState(prev => {
            const key = prev.selectedMovie?.id as string;
            const { [key]: value, ...remaning } = prev.movies;
            return ({
                ...prev,
                contextType: AppContextType.Main,
                selectedMovie: undefined,
                movies: remaning
            })
        });
    };

    const onSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value: string = e.currentTarget.value as string;
        if (value) {
            setState(prev => {
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

    return (
        <>
        <Header /> {state.contextType === AppContextType.AddMovie
            ? <AddMovie onClose={closeModal}
                onSubmit={submitAddMovie} />
            : state.contextType === AppContextType.EditMovie
            ? <EditMovie onClose={closeModal}
                onSave={saveEditMovie}
                movie={state.selectedMovie as Movie} />
            : state.contextType === AppContextType.DeleteMovie
            ? <DeleteMovie onConfirm={confirmDelete}
                onClose={closeModal} />
            :
            <main id="main">
                <input type="button" id="btn-add-movie" value="+ ADD MOVIE"
                    onClick={() => setState(prev => ({ ...prev, contextType: AppContextType.AddMovie }))} />
                <p id="find-your-movie">FIND YOR MOVIE</p>
                <Search />
                <GenreFilter onSortByChange={onSortByChange} />
                <p><b>{foundCount}</b> movies found</p>
                <MoviesList movies={state.movies}
                    onMovieEdit={clickMovieCardEdit}
                    onMovieDelete={clickMovieCardDelete}
                    sortComparer={state.moviesSortComparer} />
            </main>
        }
        <Footer />
        </>
    );
};

export default App;
