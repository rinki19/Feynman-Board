const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;


// schema to store a topic and its text in database
const topicSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    userId: { type: objectId, ref: 'User', required: true },
    text: { type: Object }
}, { timestamps: true });

module.exports = mongoose.model('Topic', topicSchema);