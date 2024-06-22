const mongoose = require("mongoose");

console.log("mongo url",process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on("error",console.error.bind(console,'Error Connection To MongoDB'));

db.once('open',function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;