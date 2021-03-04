// Installed express and started it on port 8000
const express=require('express');
const port=8000;

// Connected to the database
const db=require('./config/config');
const app=express();
// Set the view enigine as ejs and gave the path to the views folder
app.set('view engine','ejs');
app.set('views','views');
app.use(express.urlencoded());
// Middleware used to set the path for static files
app.use(express.static('Assets'));
// Routed all the adress to the routes folder.
app.use('/',require('./routes/home'));

// Listening called.
app.listen(port,function(err){
    if(err){
        console.log(`Error in listening: ${err}`);
        return;
    }
    console.log(`Server up and running on port: ${port}`);
});