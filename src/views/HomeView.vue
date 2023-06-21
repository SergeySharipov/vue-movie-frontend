<template>
	<div style="display: flex;">
		<div v-for="movie in movies" :key="movie.id">
			<MovieCard :movie="movie"/>
		</div>
	</div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';

import MovieDbService from '../services/MovieDbService';

export default {
	name: "HomeView",
	components: {
		MovieCard
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
				console.log(resp);
				this.movies = resp.data.results;

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
