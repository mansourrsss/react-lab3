import { useSelector } from "react-redux";
import MovieCard from "./../components/MovieCard";

export default function Favorite() {
    const MoviesSelected = useSelector((state) => state.favorite.movies)
    console.log(MoviesSelected)
    return (
        <>
            {MoviesSelected.length > 0 && <div>
                <h2>Movies</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {MoviesSelected.map((movie) => {
                        return (
                            <div className="col mb-4" key={movie.id}>
                                <MovieCard Movie={movie} />
                            </div>
                        );
                    })}
                </div>
            </div>}
            {
                <div>
                    No fav movie yet
                </div>
            }

            {/* <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><button onClick={() => { pageNum > 2 ? setPageNum(pageNum - 1) : setPageNum(1) }} className="page-link">Previous</button></li>
                    <li className="page-item"><button onClick={() => { setPageNum(pageNum + 1) }} className="page-link">Next</button></li>
                </ul>
            </nav> */}

        </>
    );
}

