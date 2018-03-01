const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: String
});

exports.module = mongoose.model('Category', CategorySchema);