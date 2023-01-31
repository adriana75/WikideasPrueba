const express = require('express');
const dotenv = require('dotenv');
const topicRoutes = require('./src/routes/topic.routes')
const bodyParser = require('body-parser');
const conexionBD = require('./src/persistence/db')

//Configuration the .env file
dotenv.config();

//Create Express APP
const app = express();
const port = process.env.PORT || 8000

app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

//Define the first Route of APP
app.get('/', (req, res) =>{
    //Send 200 json
    res.status(200).json(
        {
            "message": "Goodbye, world"
        }
    )
})

app.use('/topics', topicRoutes)


app.listen(port, ()=>{
    console.log(`Express server. Running at http://localhost:${port}`)
})

conexionBD.conexionBD()
