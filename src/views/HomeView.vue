<template>
  <div style="display: flex;">
    <div v-for="movie in movies" :key="movie.id">
      <img :src="'https://image.tmdb.org/t/p/w200/' +movie.poster_path"/>
      <p>
        {{ movie.overview }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "HomeView",
  components: {
  },
  data() {
    return {
      movies: [],
    };
  },

  mounted(){
    this.loadMovies();
  },

  methods: {
    async loadMovies(searchText) {
      try {
        const resp = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_THEMOVIEDB_API_KEY}&language=en-US&query=` + searchText);
        this.movies = resp.data.results;
        console.log(this.movies);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
