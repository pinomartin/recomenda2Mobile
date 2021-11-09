import { useState, useEffect} from "react"
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from "../interfaces/creditInterface";
import { MovieFull } from "../interfaces/movieInterface";

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}
const useMovieDetails = ( movieId: number ) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {
        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${ movieId }`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${ movieId }/credits`);

        const [movieDetailsResponse, castResponse] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castResponse.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state
    }
}

export default useMovieDetails
