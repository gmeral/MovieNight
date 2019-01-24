<template>
  <div>
    <movie-summary v-for="(movie, index) in movies" :key="index" class="mt-3" :movie="movie"/>
    <template v-if="movies.length == 0">
      <div>No movie has been selected</div>
      <nuxt-link to="/search">Go to search</nuxt-link>
    </template>
  </div>
</template>

<script>
import MovieSummary from '@/components/MovieSummary'

export default {
  components: {
    MovieSummary
  },
  data() {
    return {
      userMovieInput: ''
    }
  },
  computed: {
    movies() {
      return this.$store.getters.movies
    }
  },
  methods: {
    fetchMovie(movieId) {
      this.$store.dispatch('getMovie', movieId)
    }
  }
}
</script>
