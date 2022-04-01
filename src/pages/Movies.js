import { useEffect, useState } from "react";
import MovieCard from "./../components/MovieCard";
import { getMovies } from "../network/moviesApi"

export default function Movies() {
    const [Movies, setMovies] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    useEffect(() => {
        getMovies(pageNum)
            .then((res) => {
                setMovies(res.data.results);
                // console.log(res.data.results);
            })
            .catch((err) => console.log(err));
    }, [pageNum]);
    return (
        <>
            <h2>Movies</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {Movies.map((movie) => {
                    return (
                        <div className="col mb-4" key={movie.id}>
                            <MovieCard Movie={movie} />
                        </div>
                    );
                })}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><button onClick={() => { pageNum > 2 ? setPageNum(pageNum - 1) : setPageNum(1) }} className="page-link">Previous</button></li>
                    <li className="page-item"><button onClick={() => { setPageNum(pageNum + 1) }} className="page-link">Next</button></li>
                </ul>
            </nav>

        </>
    );
}

