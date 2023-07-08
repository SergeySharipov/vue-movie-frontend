<template>
    <div class="cards-container">
        <div v-for="movie in movies" :key="movie.key">
            <MovieCard :movie="movie" @showCardFront="showCardFront()" @showCardBack="showCardBack"/>
        </div>
    </div>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
    name: "CardsGrid",
    props: {
        movies: {
            type: Array,
            required: true,
        },
    },
    components: { MovieCard },
    data() {
        return {
            lastMovie: null,
        };
    },
    methods:{
        showCardFront(){

        },

        // eslint-disable-next-line no-unused-vars
        showCardBack({movie,callback}){
            if(this.lastMovie?.id === movie?.id && this.lastMovie?.key !== movie?.key){
                callback(true);
            } else {
                callback(false);
            }

            this.lastMovie = movie;
        }
    }
};
</script>

<style scoped>
.cards-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
}
</style>