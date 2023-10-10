const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlId: {
        type: String,
        required: true,
        unique: true
    },
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },  
    date: {
        type: String,
        default: Date.now
    },
    clicks: {
        type: Number,
        default: 0
    },
    userIP: {
        type: String,
        required: true,
        default: ''
    }
});

module.exports = mongoose.model('Url', urlSchema);
