import { Genres } from "../models/genres";

export class GenresExtensions {
    public static GetGenresValues(): string[] {
        return Object.values(Genres);
    }
};