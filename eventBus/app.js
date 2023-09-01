const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
    const event = req.body;
    axios.post('http://localhost:9090/events');  // For post service
    axios.post('http://localhost:8080/events');  // For comment service
    // axios.post('http://localhost:1010/events');  // for query service
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})