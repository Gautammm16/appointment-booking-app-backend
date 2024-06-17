const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;

connection.on('connected',()=>{
    console.log("MongoDb connection sucessfully established");
})
connection.on('error',(e)=>{
    console.log("MongoDb connection Error",e);
});

module.exports = mongoose;