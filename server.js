const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const Consultancys = require('./routes/api/Consultancys');
const Members = require('./routes/api/Members');
const Partners = require('./routes/api/Partners');
const Projects = require('./routes/api/Projects');
const Slots = require('./routes/api/Slots');
const Admins = require ('./routes/api/Admins');
const Meetings = require ('./routes/api/Meetings');

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true}) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/Consultancys', Consultancys);
app.use('/api/Members', Members);
app.use('/api/Partners', Partners);
app.use('/api/Projects', Projects);
app.use('/api/Slots', Slots);
app.use('/api/Admins',Admins);
app.use('/api/Meetings',Meetings);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));