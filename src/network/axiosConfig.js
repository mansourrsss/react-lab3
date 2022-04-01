import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        //   SHOW LOADER
        console.log("INTERCEPTOR", config);
        config.url = `${config.url}api_key=${process.env.REACT_APP_API_KEY}`
        console.log("url", config.url);
      
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
