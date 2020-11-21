import { Genres } from "../models/genres";

export class GenresExtensions {
    public static GenresValues(): string[] {
        return Object.values(Genres);
    }
};