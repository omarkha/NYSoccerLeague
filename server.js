const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const db = require('./db');

const PORT = process.env.PORT || 3001

mongoose.connect(PORT);

const app = express();



app.get('/', (req, res) => {
  res.send("You're a wizard, Harry!")
})

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connected successfully");
})

const playerRouter = require('./routes/players');
const clubRouter = require('./routes/clubs');

app.use('/clubs', clubRouter);
app.use('/players', playerRouter);

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

