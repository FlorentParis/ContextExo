import {Routes, Route, Link} from "react-router-dom";

export default function ListMovies() {
    const movies = [
        {
            id: 0,
            title: 'le titre',
            annee: 1995,
            synopsis: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas error nostrum mollitia, omnis ducimus nam cum."
        },
        {
            id: 1,
            title: 'deuxieme titre',
            annee: 2011,
            synopsis: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas error nostrum mollitia, omnis ducimus nam cum."
        }
    ]

    return (
        <>
            {movies.map((movie) => {
                return <div key={movie.title}>
                    <span>Titre: {movie.title}</span>
                    <span>Année: {movie.annee}</span>
                    <span>Synopsis: {movie.synopsis}</span>
                    <Link to={`/details/${movie.id}`}>Voir la fiche du film</Link>
                </div>
            })}
        </>
    )
}