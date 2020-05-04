const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js')

app.use(bodyParser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('movies_hub')
  const moviesCollection = db.collection('movies');
  const moviesRouter = createRouter(moviesCollection);
  app.use('/api/movies', moviesRouter);
})


.catch(console.error);



app.listen(3000, function(){
  console.log('App running on port 3000');
})
