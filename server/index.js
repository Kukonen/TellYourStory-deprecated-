require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');

const userRoute = require('./routes/user.route')

const app = express();
//app.use('/api');
app.use(express.json());
app.use(cookieParser());

app.use('/user', userRoute)

const PORT = process.env.PORT;


app.listen(PORT ,() => {
    console.log(`Server start on ${PORT} port`)
})