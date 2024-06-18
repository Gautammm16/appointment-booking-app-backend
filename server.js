const express = require('express');
const cors = require('cors');
const app = express();
const PORT =process.env.PORT || 5000


require('dotenv').config();


app.use(express.json());
app.use(cors());
const dbConfig = require('./config/dbConfig.js');

const userRoute = require('./routes/user.routes.js')

app.use('/api/user',userRoute);


app.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`)
})