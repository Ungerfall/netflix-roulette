import React, { useState } from 'react';
import Footer from '../components/Footer';
import MoviesList from '../components/MoviesList';
import Search from '../components/Search';
import { Movie, MovieForMovieCard, MoviesComparer } from '../models/movie';
import '../App.css';
import GenreFilter from '../components/GenreFilter';
import Header from '../components/Header';
import AddMovie from '../components/AddMovie';
import EditMovie from '../components/EditMovie';
import DeleteMovie from '../components/DeleteMovie';
import { datesComparer, stringComparer } from '../utils/comparers';
import { AppPage } from '../models/appPage';
import useMovies from '../hooks/useMovies';

const App: React.FC = () => {
    const {isLoading, movies, setMovies} = useMovies();
    const [page, setPage] = useState(AppPage.Main);
    const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();
    const [moviesSortComparer, setMoviesSortComparer]
        = useState<MoviesComparer>(() => (a: MovieForMovieCard, b: MovieForMovieCard) => datesComparer(a.release_date, b.release_date));

    const closeModal = () => {
        setPage(AppPage.Main);
    };

    const submitAddMovie = (movie: Movie) => {
        setMovies({ ...movies, [movie.id]: movie });
        setPage(AppPage.Main);
    };

    const saveEditMovie = (movie: Movie) => {
        setMovies({ ...movies, [movie.id]: movie });
        setPage(AppPage.Main);
    };

    const clickMovieCardEdit = (movie: MovieForMovieCard) => {
        setPage(AppPage.EditMovie);
        setSelectedMovie(movie as Movie);
    };

    const clickMovieCardDelete = (movie: MovieForMovieCard) => {
        setPage(AppPage.DeleteMovie);
        setSelectedMovie(movie as Movie);
    };

    const confirmDelete = () => {
        setSelectedMovie(undefined);
        const key = selectedMovie?.id as string;
        const { [key]: value, ...remaning } = movies;
        setMovies(remaning);
        setPage(AppPage.Main);
    };

    const onSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value: string = e.currentTarget.value as string;
        if (value) {
            let comparer: (a: MovieForMovieCard, b: MovieForMovieCard) => number;
            if (value === "releaseDate") {
                comparer = (a, b) => datesComparer(a.release_date, b.release_date);
            }
            else if (value === "genre") {
                comparer = (a, b) => stringComparer(a.genres ? a.genres[0] : undefined, b.genres ? b.genres[0] : undefined);
            }
            else {
                comparer = (a, b) => stringComparer(a.title, b.title);
            }

            setMoviesSortComparer(() => comparer);
        }
    };

    return (
        <>
        <Header /> {page === AppPage.AddMovie
            ? <AddMovie onClose={closeModal}
                onSubmit={submitAddMovie} />
            : page === AppPage.EditMovie
            ? <EditMovie onClose={closeModal}
                onSave={saveEditMovie}
                movie={selectedMovie as Movie} />
            : page === AppPage.DeleteMovie
            ? <DeleteMovie onConfirm={confirmDelete}
                onClose={closeModal} />
            :
            <main id="main">
                <input type="button" id="btn-add-movie" value="+ ADD MOVIE"
                    onClick={() => setPage(AppPage.AddMovie)} />
                <p id="find-your-movie">FIND YOR MOVIE</p>
                <Search />
                <GenreFilter onSortByChange={onSortByChange} />
                <p><b>{Object.keys(movies).length}</b> movies found</p>
                {!isLoading
                    ? <MoviesList movies={movies}
                        onMovieEdit={clickMovieCardEdit}
                        onMovieDelete={clickMovieCardDelete}
                        sortComparer={moviesSortComparer} />
                    : <div className="loader" />
                }
            </main>
        }
        <Footer />
        </>
    );
};

export default App;
