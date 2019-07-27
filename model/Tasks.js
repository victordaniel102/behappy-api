const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 1
    },
    description: {
        type: String,
        required: true,
        min: 1
    }
});

module.exports = mongoose.model('tasks', TasksSchema);