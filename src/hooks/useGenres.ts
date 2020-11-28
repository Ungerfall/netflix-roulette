import { useEffect, useState } from "react";
import { GenresExtensions } from "../utils/GenresExtensions";

const useGenres = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        setIsLoading(true);
        setGenres(GenresExtensions.GetGenresValues());
        setIsLoading(false);
    }, []);

    return { isLoading, genres };
};

export default useGenres;