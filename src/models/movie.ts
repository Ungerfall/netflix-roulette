import { Genres } from "./genres";
import { uuidv4 } from '../utils/uuid';

export interface Movie {
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: Date;
    genres: Genres[] | undefined;
    poster_path: string | undefined;
    id: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: string;
};

export type MovieForMovieCard = Pick<Movie, "title" | "release_date" | "genres" | "poster_path" | "id">;

export type MoviesComparer = (a: MovieForMovieCard, b: MovieForMovieCard) => number;

const imagePlaceholder: string = "http://placehold.it/325x450?text=movie-poster";
export const getMoviesStub: () => Movie[] = () => [
    {
        title: "Pulp Fiction",
        genres: [Genres.actionAndAdventure],
        release_date: new Date(2004, 12, 22),
        poster_path: imagePlaceholder,
        id: uuidv4(),
        overview: "",
        runtime: "",
        tagline: "tagline",
        vote_average: 4.5,
        vote_count: 100002,
        budget: 125553,
        revenue: 5000000,
    },
    {
        title: "Bohemian Rhapsody",
        genres: [Genres.drama],
        release_date: new Date(2003, 12, 22),
        poster_path: imagePlaceholder,
        id: uuidv4(),
        overview: "",
        runtime: "",
        tagline: "tagline",
        vote_average: 4.5,
        vote_count: 100002,
        budget: 125553,
        revenue: 5000000,
    },
    {
        title: "Kill Bill: Vol 2",
        genres: [Genres.drama],
        release_date: new Date(1994, 12, 22),
        poster_path: imagePlaceholder,
        id: uuidv4(),
        overview: "",
        runtime: "",
        tagline: "tagline",
        vote_average: 4.5,
        vote_count: 100002,
        budget: 125553,
        revenue: 5000000,
    },
    {
        title: "Reservoir dogs",
        genres: [Genres.drama],
        release_date: new Date(1994, 12, 22),
        poster_path: imagePlaceholder,
        id: uuidv4(),
        overview: "",
        runtime: "",
        tagline: "tagline",
        vote_average: 4.5,
        vote_count: 100002,
        budget: 125553,
        revenue: 5000000,
    },
    {
        title: "Inception",
        genres: [Genres.actionAndAdventure],
        release_date: new Date(2003, 12, 22),
        poster_path: imagePlaceholder,
        id: uuidv4(),
        overview: "",
        runtime: "",
        tagline: "tagline",
        vote_average: 4.5,
        vote_count: 100002,
        budget: 125553,
        revenue: 5000000,
    },
];
