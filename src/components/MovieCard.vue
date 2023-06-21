<template>
	<div class="movie-card">
		<img :src="'https://image.tmdb.org/t/p/w200/' +movie.poster_path"/>
		<div class="gradient"></div>
		<p>
			{{ movie.title }}
		</p>
	</div>
</template>

<script>
export default {
	name: "MovieCard",
	props: {
		movie: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
.movie-card {
	border-radius: 15px;
	overflow: hidden;
	margin: 10px;
	position: relative;
	display: flex;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.movie-card p {
	position: absolute;
	bottom: 8px;
	left: 8px;
	color: #fff;
	font-weight: bold;
	font-size:small;
}

.gradient{
	background-image: linear-gradient(rgba(0, 0, 0, 0), black);
	width: 100%;
	height: 70px;
	bottom: 0px;
	position: absolute;
}
</style>