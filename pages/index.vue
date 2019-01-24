<template>
  <div>
    <movie-summary v-for="(movie, index) in movies" :key="index" class="mt-3 relative" :movie="movie">
      <v-btn @click="removeMovie(movie)" icon class="close-button"><v-icon>close</v-icon></v-btn>
    </movie-summary>
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
    },
    removeMovie(movie) {
      this.$store.commit('removeMovie', movie)
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
}

</style>
