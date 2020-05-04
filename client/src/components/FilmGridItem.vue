<template lang="html">
<div class="film-card">
  <h2>{{film.title}} </h2>
  <p><span class="film-key">Genre: </span>{{film.Genre}}  </p>
  <p><span class="film-key">Rating: </span>{{film.rating}}  </p>
  <p><span class="film-key">Release Date: </span>{{film.release_date}}  </p>
  <p><span class="film-key">Running time: </span>{{film.runtime}}   </p>

  <button type="button" class="action-btn" v-on:click="deleteFilm">Delete</button>
  <button type="button" class="action-btn" v-on:click="selectFilm">Show Details</button>
</div>
</template>

<script>

import MoviesService from '@/services/MoviesService.js';
import {eventBus} from '../main.js'

export default {
  name: 'film-card',
  props: ['film'],
  methods: {
    deleteFilm(){
      MoviesService.deleteMovie(this.film._id)
      .then(() => eventBus.$emit("delete-film", this.film._id ))
    },
    selectFilm() {
      //TODO: Code film Selected Method
    }
  }
}
</script>

<style lang="css" scoped>
 .film-card {
   background-color: #BFDBF7;
   border: 1px solid #BFDBF7;
   border-radius: 5px;
   padding: 20px;
   margin: 10px;
   width: 25vw;
 }

 .action-btn {
   background-color: #006989;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
 }

 .film-key {
   font-weight: bold;
   color: #3E363F
 }
</style>
