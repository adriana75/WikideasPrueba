const getDB = require('../persistence/db')
const MongoDb = require('mongodb')
const dotenv = require('dotenv')

const getAll = async()=>{
    const conexion = getDB.getDB()
    return await conexion.collection("topic").find().toArray()
}

const get = async(object)=>{
    const conexion = getDB.getDB()
    const filtro = {_id: Number(object.id)}
    return await conexion.collection("topic").findOne(filtro)  
}

const update = async(object, callback)=>{
    const conexion = getDB.getDB()
    const filtro = { _id: Number(object.id) }
    delete object.id;
    const operacion = {
        $set:object
    }
    return await conexion.collection("topic").findOneAndUpdate(filtro, operacion,{ upsert:true}, callback)
}

const save = async(object, callback)=>{
    const conexion = getDB.getDB()
    object._id = Number(object.id)
    delete object.id
    await conexion.collection("topic").insertOne(object, callback)
}

const delet = async(id, callback)=>{
    const conexion = getDB.getDB()
    const filtro = { _id: Number(id) }
    await conexion.collection("topic").deleteOne(filtro, callback)
}

module.exports = { getAll, get, update, save, delet };


