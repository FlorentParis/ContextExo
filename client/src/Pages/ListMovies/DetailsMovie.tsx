import { useParams } from "react-router-dom";

export default function DetailsMovie() {
    let params = useParams();

    return (
        <>Test {params.movieId}</>
    )
}