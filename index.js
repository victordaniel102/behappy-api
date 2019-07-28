const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const Root = require('./routes/Root');
const Tasks = require('./routes/Tasks');

dotenv.config();
const PORT = process.env.PORT || 8080;

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => 
    console.log('Connected to DB')
);

app.use(express.json());

app.use('/', Root)
app.use('/tasks', Tasks);

app.listen(PORT, () => console.log('Server is Running...'));