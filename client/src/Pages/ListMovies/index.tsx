import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Routes, Route, Link} from "react-router-dom";
import { fetchMovies, selectAllMovies } from "../../features/moviesSlice";
import { useAppSelector } from "../../hooks/reduxHooks";
import { AppDispatch } from "../../utils/store";

export default function ListMovies() {
    
    const dispatch = useDispatch<AppDispatch>();
    const movies = useAppSelector(selectAllMovies);

    const movieStatus = useAppSelector((state: any) => state.movies.status)

    useEffect(() => {
        if (movieStatus === 'idle') {
          dispatch(fetchMovies())
        }
    }, [movieStatus, dispatch])


    return (
        <>
            {movies.map((movie: any) => {
                return <div key={movie.date}>
                    <span>Titre: {movie.title}</span>
                    <Link to={`/details/${movie.id}`}>Voir la fiche du film</Link>
                </div>
            })}
        </>
    )
}