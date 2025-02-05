const express = require('express');
const cors = require('cors'); 

const app = express();
require('dotenv').config();

//console.log("URI:", process.env.DB_URI);
require('./Models/database');
const PORT = process.env.PORT || 8080;

const todoRouter = require('./Routes/TodoRouter');
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
    res.send("Hello from the server");
})

app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', todoRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT = ${PORT}`)
})