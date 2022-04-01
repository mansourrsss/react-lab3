import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { setFavorite } from "../store/actions/favorite"

export default function MovieCard({ Movie }) {
    const dispatch = useDispatch();
    const addFavMovie = (movie) => {
        // console.log(movie);
        dispatch(setFavorite(movie));
    }
    return (
        <div className="card h-100">
            <img src={"https://image.tmdb.org/t/p/w500" + Movie.poster_path} className="card-img-top" alt={Movie.title} />
            <div className="card-body">
                <div className="row">
                    <h5 className="col card-title">{Movie.title} </h5>
                    <FontAwesomeIcon className="col" onClick={() => { addFavMovie(Movie) }} icon={faStar} />
                </div>
                <p className="card-text">{Movie.vote_average}/10</p>
                <Link to={`/movies/${Movie.id}`} className="btn btn-primary">
                    Details
                </Link>
            </div>
        </div>
    );
}
