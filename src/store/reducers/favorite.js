import { SET_FAVORITE, DELETE_FAVORITE } from "../actions/types";

const INITIAL_STATE = {
    movies: [],
};

export function favoriteReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FAVORITE:
            // console.log(action.payload, state, "reducer")
            return {
                ...state,
                movies: [...state.movies, action.payload],
            }
        case DELETE_FAVORITE:
            let index = state.movies.findIndex((movie) => movie.id === action.payload.id);
            state.movies.splice(index, 1);
            return {
                ...state,
                movies: [...state.movies],
            }
        default:
            return state;
    }
}