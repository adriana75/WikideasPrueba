'use strict';
const topicDomain = require('../domain/topic.domain')

exports.getAll = async function (req, res) {
    try {
        //validaciones
        const topicsList = topicDomain.getAll();
        res.status(200).json(topicsList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.get = async function (req, res) {
    res.status(404).json({ message: error.message });
};

exports.save = async function (req, res) {
    try {
        //validaciones
        console.log(req.body);
        const topic = topicDomain.save(req.body);
        res.status(200).json(topic);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.update = async function (req, res) {
    res.status(404).json({ message: error.message });
};

exports.delete = async function (req, res) {
    res.status(404).json({ message: error.message });
};