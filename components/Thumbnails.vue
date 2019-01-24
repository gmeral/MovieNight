<template>
  <v-layout row @click="toHome">
    <img class="thumbnail mr-1" v-for="(movie, index) in movies" :src="movie.thumbnailPath()" :key="index" />
  </v-layout>
</template>

<script>
  export default {
    computed: {
      movies() {
        return this.$store.getters.movies
      }
    },
    methods: {
      toHome() {
        this.$router.push({ path: '/' })
      }
    }
  }
</script>

<style scoped>
.thumbnail {
  height: 50px;
  width: 33px;
}
</style>
