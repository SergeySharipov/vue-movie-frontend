<template>
    <div style="display: flex;">
        <CardsGrid :movies="movies" />
    </div>
</template>

<script>
import CardsGrid from '@/components/CardsGrid.vue';

import MovieDbService from '../services/MovieDbService';

export default {
    name: "HomeView",
    components: {
        CardsGrid
    },
    data() {
        return {
            movies: [],
        };
    },

    mounted() {
        this.loadMovies();
    },

    methods: {
        async loadMovies(searchText) {
            try {
                const resp = await MovieDbService.loadMovies(searchText);
                this.movies = resp.data.results.splice(0, resp.data.results.length - 11);
                this.movies.push(...this.movies);
                this.movies.sort(() => Math.random() - 0.5);
                for(let i; i < this.movies.length; i++){
                    this.movies[i]['key'] = i;
                }
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
