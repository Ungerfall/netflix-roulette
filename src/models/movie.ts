export interface Movie {
    title: string;
    releaseDate: Date;
    genres: string[];
    imageSrc: string | undefined;
    id: string;
    overview: string;
    runtime: string;
}

export type MovieCardDto = Pick<Movie, "title" | "releaseDate" | "genres" | "imageSrc" | "id">;