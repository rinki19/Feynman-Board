const mongoose = require('mongoose');

// schema for storing a username in database
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);