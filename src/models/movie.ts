import { Genres } from "./genres";

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