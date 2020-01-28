const express = require("express");
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.json());

//IMPORT ROUTES MIDDLEWARE
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)

// app.use('/posts', () => {
// console.log('This is a middleware function running on the posts page ')
// });

//ROUTES
app.get('/', (req,res)=>{
    res.send('we are on home')
})

//CONNECT TO DB
// CLEAR DEPRECATION WARNINGS
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect( 
    process.env.DB_CONNECTION, 
    () => { console.log("connected to db")}).catch(err => console.log(err)
);

app.listen(9090, () => { console.log('lisening on port 9090')})