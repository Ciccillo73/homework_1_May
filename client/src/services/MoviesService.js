const baseUrl = "http://localhost:3000/api/movies/";

export default {
  getMovies(){
    return fetch(baseUrl)
    .then(res => res.json())
  },
  deleteMovie(id){
    return fetch(baseUrl + id, {method: "DELETE"})
    .then(res => res.json())
  }
}
