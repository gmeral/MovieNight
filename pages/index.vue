<template>
  <v-layout column>
    <v-flex shrink>
      <v-text-field label="Enter the movie IMDB id" v-model="userMovieInput"/>
      <v-btn @click="fetchMovie(userMovieInput)">Ok</v-btn>
    </v-flex>
    <v-layout v-if="movie" shrink>
      <img :src="posterUrl"/>
      <v-layout column class="ml-3">
        <h1 class="mt-3">{{title}}</h1>
        <div class="mt-3">{{description}}</div>
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data() {
    return {
      movie: undefined,
      posterUrl: '',
      userMovieInput: ''
    }
  },
  computed: {
    title() {
      return this.movie.original_title
    },
    description() {
      return this.movie.overview
    }
  },
  methods: {
    fetchMovie(movieId) {
      this.$store.dispatch('getMovie', movieId)
        .then((movie) => {
          this.movie = movie
          if (movie.poster_path) {
            this.fetchPoster(movie.poster_path)
          }
        })
    },
    fetchPoster(posterPath) {
      this.$store.dispatch('getPosterUrl', posterPath)
        .then((posterUrl) => {
          this.posterUrl = posterUrl
        })
    }
  }
}
</script>
