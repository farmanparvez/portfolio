const mongoose = require('mongoose');

const aboutSehema = new mongoose.Schema({
    name: {
        type: String
    },
    about: {
        type: String
    },
    links: {
        type: Array
    }
})

module.exports = About = mongoose.model("About", aboutSehema)