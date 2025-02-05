const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI)
.then(()=>{
    console.log("Mongodb is connected");
}).catch((err)=>{
    console.log("Mongodb conn error...", err)
})