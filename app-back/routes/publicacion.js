const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const uri = "mongodb+srv://admin:Admin1234@cluster0-7qmuh.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var conn = client.connect();

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    conn.then(client => {
        client.db("db").collection("publicacion").find({}).toArray((err, data) => {
            res.send(data)
        });
    });
});



router.put("/", (req) => {
    conn.then(client => { 
        client.db("db").collection("publicacion").find({ contenido: req.params.contenido }).toArray((err, data) => {
            client.db("db").collection("publicacion").updateOne({ contenido: req.params.contenido }, { $set: req.body });
       
    });
});
});
module.exports = router;