'use strict';
const topicPersistence = require('../persistence/topic.persistence')

exports.getAll = async function () {
    try {
        const topics = await topicPersistence.getAll()
        console.log(topics);
        return topics;
    } catch (error) {
        return null;
    }
};

exports.update = async function () {
    try {
        const topic = topicPersistence.update()

        return topic;
    } catch (error) {
        return null;
    }
};

exports.save = async function (topicObj) {
    try {
        const topic = topicPersistence.save(topicObj)

        return topic;
    } catch (error) {
        return null;
    }
};



