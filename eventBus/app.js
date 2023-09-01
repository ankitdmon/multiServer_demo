const express = require('express');
const bodyParser = require('body-parser');
const exios = require('axios');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})