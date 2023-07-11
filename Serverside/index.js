const express= require('express');
const cors = require('cors');
const mongoose= require('mongoose');
const port = 8000;

const app =express();
const bodyParser = require("body-parser");
// mongoose.connect('mongodb://localhost:27017/mykeeperAppDB', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
const db = require('./config/moongoose');

const keeperapp = require('./models/appschema');
// const keeperSchema = mongoose.Schema({
//     title: String,
//     content: String
// });

// const keeper = new mongoose.model("keeper", keeperSchema);



app.get('/api/getall', function(req , res){
    keeperapp.find({})
    .then(function(list){
        return res.status(200).send(list);
    })
    .catch(function(err){
        console.log("error in fetchingn from the database");
        return ;
    })
});

app.post('/api/addnew', function(req , res){
    // const {newtitle , newcontent}= req.body;
    keeperapp.create({title:req.body.title , content : req.body.content});
    keeperapp.find({})
    .then(function(list){
        return res.status(200).send(list);
    })
    .catch(function(err){
        console.log("error in fetching from the database");
        return ;
    })
});

app.post('/api/delete', function(req , res){
    // const {noteid} = req.body;
    // console.log(req.body);
    const noteid = req.body.id;
    console.log(noteid);
    keeperapp.findByIdAndDelete(noteid)
    .then(function() {
        return keeperapp.find({}); 
    })
    .then(function(list) {
        return res.status(200).send(list);
    })
    .catch(function(err) {
        console.log("Error in deleting the note");
        return res.status(500).send("Internal Server Error"); 
    });
});


app.listen(port, function(err){
    if(err){
        console.log("error in connection to the server");
    }
    console.log("My server is running on port : " , port);
});