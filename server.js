const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
const dbConfig = require('./config/dbConfig.js');

const userRoute = require('./routes/user.routes.js')

app.use('/api/users',userRoute);

const PORT =process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`)
})