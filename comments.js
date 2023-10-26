// Create web server

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Read comments file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Get all comments
app.get('/comments', function(req, res) {
  res.send(comments);
});

// Add a new comment
app.post('/comments', function(req, res) {
  var newComment = {
    id: Date.now(),
