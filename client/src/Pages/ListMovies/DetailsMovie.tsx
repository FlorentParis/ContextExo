import { useParams } from "react-router-dom";
import { selectMoviesById } from "../../features/moviesSlice";
import { useAppSelector } from "../../hooks/reduxHooks";

export default function DetailsMovie() {
    let params = useParams();

    const movie = useAppSelector(state => selectMoviesById(state, params.movieId));

    return (
        <>
            <div>{movie.title}</div>
            <div>{movie.date}</div>
            <div>{movie.synopsis}</div>
        </>
    )
}