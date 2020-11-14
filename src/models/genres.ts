export enum Genres {
    all = "ALL",
    documentary = "DOCUMENTARY",
    comedy = "COMEDY",
    horror = "HORROR",
    crime = "CRIME"
};

export class GenresUtils {
    public static GenresValues(): string[] {
        return Object.values(Genres);
    }
}