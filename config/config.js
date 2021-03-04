// Installed mongoose and started the mogoDB server.
const mongoose=require('mongoose');
// Connection made
mongoose.connect('mongodb://localhost/tasklist');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error in starting db"));

db.once('open',function(){
    console.log("Succesfull connection to db");
})