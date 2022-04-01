import { axiosInstance } from "./axiosConfig";

export const getMoviesDetails = (id) => {
    return axiosInstance.get(`/${id}?`);
};

export const getMovies = (num) => {
    return axiosInstance.get(`/popular/?page=${num}&`);
};

export const getMoviesTopRated = () => {
    return axiosInstance.get(`/top_rated/?`);
};
