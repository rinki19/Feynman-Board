const express = require('express');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.mongoURI)
.then(()=>console.log('MongoDB is connected...'), err=>console.log(err));

app.use(routes);

app.listen(process.env.PORT || 3001, () => console.log('App running on ' + (process.env.PORT || 3001)));