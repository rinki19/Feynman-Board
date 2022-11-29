const router = require('express').Router();
const { getTopics } = require('./controllers/topicController');

router.post('/getTopics', getTopics);  // after entering the username, topic list will be visible, if username exists; otherwise username is created in database

module.exports = router;