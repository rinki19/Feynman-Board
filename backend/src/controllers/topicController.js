const topicModel = require('../models/topicModel');
const userModel = require('../models/userModel');


// to be completed when front end part to add topic is completed
const addTopic = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}


// shows the topics list if the entered username exists in database, otherwise that username is created in database and topic list is empty.
const getTopics = async (req, res) => {
    try {
        let username = req.body.username;
        if (!username) return res.status(400).send({ status: false, message: 'Username is mandatory' });

        const user = await userModel.findOne({ username });

        // if username exists in database, topics list is shown
        if (user) {
            const topics = await topicModel.find({ userId: user._id });
            // if (topics.length === 0) return res.status(404).send({ status: false, message: 'No topics found' });

            return res.status(200).send({ status: true, userId: user._id, topics });

        // if username does not exist in database, then it is created
        } else {
            const userCreated = await userModel.create({ username });
            return res.status(201).send({ status: true, message: 'User created', userId: userCreated._id, topics: [] });
        }
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

module.exports = { getTopics };