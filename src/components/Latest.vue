<template>
  <div class="hello" v-for="movie in movies">
    <h1>{{ movie.title }}</h1>
    <img :src="fetachImage(movie.poster_path)">
    <p> {{ movie.overview }} </p>
  </div>
</template>

<script>
	export default {
		data () {
			return {
				msg: "Latest",
				movies: []
			}
		},
		methods: {

			fetchData(){
				var baseurl = "https://api.themoviedb.org/3/discover/movie?api_key=dcdb07467047fab5a15bfd545fbc912d";
				this.$http.get(baseurl).then(
					function(response){
						this.movies = response.data.results;
						console.log(response.data.results);
					})
			},
			fetachImage(filepath){
				var url = "http://image.tmdb.org/t/p/w300" + filepath;
				return url;
			}
		},
		computed: {
		},
		created() {
			this.fetchData()
		}

	}
</script>
