import { Genres } from "./genres";
import { uuidv4 } from '../utils/uuid';

export interface Movie {
    title: string;
    releaseDate: Date;
    genre: Genres | undefined;
    imageSrc: string | undefined;
    id: string;
    overview: string;
    runtime: string;
};

export type MovieForMovieCard = Pick<Movie, "title" | "releaseDate" | "genre" | "imageSrc" | "id">;
export type MoviesComparer = (a: MovieForMovieCard, b: MovieForMovieCard) => number;

const imagePlaceholder: string = "http://placehold.it/325x450?text=movie-poster";
export const getMoviesStub: () => Movie[] = () => [
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
