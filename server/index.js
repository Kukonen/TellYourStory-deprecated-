require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();
app.use('api');
app.use(express.json());
app.use(cookieParser());


const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server start on ${PORT} port`)
})