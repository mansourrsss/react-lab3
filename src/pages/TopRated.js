import { useEffect, useState } from "react";
import MovieCard from "./../components/MovieCard";
import { getMoviesTopRated } from "../network/moviesApi"

export default function TopRated() {
    const [Movies, setMovies] = useState([]);
    useEffect(() => {
        getMoviesTopRated()
            .then((res) => {
                setMovies(res.data.results);
                // console.log(res.data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <h2>Top Rated Movies</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {Movies.map((movie) => {
                    return (
                        <div className="col mb-4" key={movie.id}>
                            <MovieCard Movie={movie} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
