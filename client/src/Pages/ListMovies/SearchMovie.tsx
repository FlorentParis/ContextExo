import { ChangeEvent, useState } from "react";

export default function SearchMovie() {
    const [movie, setMovie] = useState<string>("");

    const toggleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setMovie(event.target.value);
    }

    const toggleSend = () => {
        /* addSearchMovie(movie); */
        setMovie("");
    }

    return (
        <form>
            <input value={movie} onChange={toggleChange} placeholder="Rechercher un film" />
            <button onClick={toggleSend}>Rechercher</button>
        </form>
    )
}