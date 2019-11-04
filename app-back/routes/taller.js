const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const uri = "mongodb+srv://admin:admin@proyectoweb-n33pf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var conn = client.connect();

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    conn.then(client =>{
        client.db("ciclas").collection("taller").find({}).toArray((err, data) => {
            res.send(data);
        });
    })
});

app.get("/:taller", (req, res) => {
    conn.then(client => {
        client.db("ciclas").collection("taller").find({ _id: ObjectId(req.params.taller) }).toArray((err, data) => {
            res.send(data[0]);
        });
    });
});

app.post("/", (req, res) => {
    conn.then(client => {
        req.body["productos"] = [];
        req.body["servicios"] = [];
        client.db("ciclas").collection("taller").insertOne(req.body);
        res.send("El taller ha sido creado");
    });
});

module.exports = router;