use movies_hub;
db.dropDatabase();

db.movies.insertMany([
  {
    title: "Aiplane!",
    genre: "Humour",
    rating: "PG",
    release_date: 1990,
    runtime: 87,
    crew: {
      director: "John smith",
      producer: "Paramount"
    }
  },
  {
    title: "Hotgun",
    genre: "Far west",
    rating: "15",
    release_date: 1980,
    runtime: 110,
    crew: {
      director: "Ben High",
      producer: "Sony"
    }
  },
  {
    title: "The Killing",
    genre: "Horror",
    rating: "18",
    release_date: 2015,
    runtime: 60,
    crew: {
      director: "Matt Phillip",
      producer: "HBO"
    }
  }
])
