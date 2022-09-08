const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("projects", projectSchema);