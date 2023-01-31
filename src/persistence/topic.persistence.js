const getDB = require('../persistence/db')
const MongoDb = require('mongodb')
const dotenv = require('dotenv')

const getAll = async()=>{
    const conexion = getDB.getDB()
    await conexion.collection("topic")
    .find({})
}

const update = async(object, callback)=>{
    const conexion = getDB.getDB()
    const filtro = { _id: object.id }
    delete object.id;
    const operacion = {
        $set:object
    }

    await conexion.collection("topic")
        .findOneAndUpdate(filtro, operacion, 
            { upsert:true, returnOriginal:true },
            callback)
}

const save = async(object, callback)=>{
    const conexion = getDB.getDB()
    object._id = Number(object.id)
    delete object.id
    await conexion.collection("topic")
        .insertOne(object, callback)
}


module.exports = { getAll, update, save };


