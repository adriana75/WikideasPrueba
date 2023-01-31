const getDB = require('../persistence/db')
const MongoDb = require('mongodb')
const dotenv = require('dotenv')

const getAll = async()=>{
    const conexion = getDB.getDB()
    return await conexion.collection("topic")
    .find().toArray()
}

const get = async(object)=>{
    const conexion = getDB.getDB()
    const filtro = {_id: object.id}
    return await conexion.collection("topic").findOne(filtro)
  
}

const update = async(object, callback)=>{
    const conexion = getDB.getDB()
    /*
    const filtro = { _id: Number(object.id) }
    delete object.id;
    const operacion = {
        $set:object
    }
    console.log("persistence", object);
    const topic = await conexion.collection("topic")
    .findOneAndUpdate(filtro, operacion, { upsert:true, returnOriginal:true }, callback)
    return topic
    */ 
   const topic = object
   //delete object._id;
   console.log("id", topic._id);
   return await conexion.collection("topic").findOneAndUpdate({_id: topic._id}, topic, { upsert:true, returnOriginal:true },
    callback)
   
}

const save = async(object, callback)=>{
    const conexion = getDB.getDB()
    object._id = Number(object.id)
    delete object.id
    await conexion.collection("topic")
        .insertOne(object, callback)
}


module.exports = { getAll, get, update, save };


