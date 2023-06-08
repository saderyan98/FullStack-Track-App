const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect("mongodb+srv://saderyan98:cwig7X9xFnKz1QOC@cluster0.22dpplv.mongodb.net/Music", {
useNewUrlParser: true,
useUnifiedTopology: true})

const trackSchema = new mongoose.Schema({
    artist: String,
    title: String,
    year: Number
  });

const track = mongoose.model("track", trackSchema, "tracks");

app.get("/", function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/tracks', function(req, res) 
{
  track.insertMany = ([
    {
      artist: "Kate Bush",
      title: "Running up that Hill",
      year: 1984
    },
    {
      artist: "Peter Gabriel",
      title: "Games without Frontiers",
      year: 1982
    },
    {
      artist: "Tori Amos",
      title: "Winter",
      year: 1996
    },
    {
      artist: "Imogen Heap",
      title: "Canvas",
      year: 2002
    },
    {
      artist: "The Smiths",
      title: "How Soon is Now",
      year: 1984
    }
  ]);

track.insertMany(track, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error inserting the track into the database.');
        return;
      }
      
      res.status(200).send('Tracks added successfully.');
    });
  });


app.listen(3000, function(){
    console.log("Server running on 3000");
})