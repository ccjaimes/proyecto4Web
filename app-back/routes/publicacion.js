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
router.post("/", (req, res) => {
    conn.then(client => {
        
        client.db("db").collection("publicacion").insertOne(req.body);
        res.send("La publicacion sido creada");
    });
});
module.exports = router;