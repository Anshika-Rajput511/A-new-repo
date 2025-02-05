const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        required: true
    }
})

const todoModel = mongoose.model('todos', todoSchema);
module.exports = todoModel