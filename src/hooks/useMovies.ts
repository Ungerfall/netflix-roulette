import { useEffect, useState } from "react";
import { getMoviesStub, Movie } from "../models/movie";

const useMovies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState<Record<string, Movie>>({});

    useEffect(() => {
        setIsLoading(true);
        const moviesStub = getMoviesStub();
        setMovies(moviesStub
            .reduce(
                (acc, item) => {
                    acc[item.id] = item;
                    return acc;
                },
                {} as Record<string, Movie>
            )
        );
        // simulate loading
        setTimeout(() => setIsLoading(false), 3000);
    }, [])

    return { isLoading, movies, setMovies };
};

export default useMovies;