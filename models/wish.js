const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const wishSchema = new Schema({
    item: {
        type: String
    }
   
});

mongoose.model('Wish', wishSchema);