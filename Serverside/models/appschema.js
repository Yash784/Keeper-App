const mongoose = require('mongoose');

const keeperappschema = new mongoose.Schema({
    title:{
        type:String
        
    },
    content:{
        type:String
    }
});
const keeper = mongoose.model('keeper', keeperappschema);
module.exports = keeper;
