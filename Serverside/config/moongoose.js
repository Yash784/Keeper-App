const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/keepere_app_db', {useNewUrlParser : true,useUnifiedTopology:true });

const db = mongoose.connection;

db.on('error', console.error.bind(console , 'error connection to db'));

db.once('open', function(){
    console.log("Succesfully connected to the database");
})
