import React, { useEffect, useReducer, useState } from "react";
import {movies} from '../components/GetData';
import MovieCard from '../components/MovieCard';
import SearchBarMovies from "../components/SearchBarMovies";

const MoviesPage = () => {
    const [ moviesState, setMoviesState ] = useState(movies);
    //   https://stackoverflow.com/questions/30626030/can-you-force-a-react-component-to-rerender-without-calling-setstate
    const [ , forceUpdate ] = useReducer(x => x + 1, 0);


    useEffect(() => {

    }, [ moviesState ]);

    return (
        <div>
            <SearchBarMovies moviesHandler={ setMoviesState } forceUpdate={ forceUpdate }/>
            <div className="movie-list">
                {
                    moviesState.map((each) => {
                        const { title, images, releaseYear } = each;
                        return (
                            <MovieCard title={ title } images={ images } y={ releaseYear }/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default MoviesPage;



