'use strict';
const topicPersistence = require('../persistence/topic.persistence')

exports.getAll = async function () {
    try {
        const topics = await topicPersistence.getAll()
        return topics;
    } catch (error) {
        return null;
    }
};

exports.get = async function (topicObj) {
    try {
        const topic = await topicPersistence.get(topicObj)
        return topic;
    } catch (error) {
        return null;
    }
};

exports.update = async function (topicObj) {
    try {
        const topic = await topicPersistence.update(topicObj)
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

exports.delete = async function (topicObj) {
    try {
        const topic = topicPersistence.delet(topicObj)
        return topic;
    } catch (error) {
        return null;
    }
};



