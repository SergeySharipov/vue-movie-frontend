import axios from 'axios';

export default {

    async loadMovies(searchText) {
        return await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_THEMOVIEDB_API_KEY}&language=en-US&query=${searchText}`);
    }

}