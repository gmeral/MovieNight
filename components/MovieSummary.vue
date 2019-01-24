<template>
<v-layout shrink>
  <img :src="movie.posterPath()" />
  <v-layout column class="ml-3">
    <h1 class="mt-3">{{movie.title()}}</h1>
    <div class="mt-3">{{movie.description()}}</div>
    <slot></slot>
  </v-layout>
</v-layout>
</template>

<script>
import Movie from '@/model/movie.js'

export default {
  props: {
    movie: Movie
  }
}
</script>
