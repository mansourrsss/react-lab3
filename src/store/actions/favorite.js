import { SET_FAVORITE, DELETE_FAVORITE } from "./types";

export const setFavorite = (payload) => {
    console.log(payload, "action")
    return {
        type: SET_FAVORITE,
        payload,
    }
}

export const deleteFavorite = (payload) => {
    return {
        type: DELETE_FAVORITE,
        payload,
    }
}