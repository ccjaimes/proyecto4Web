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
        client.db("ciclas").collection("grupo").find({}).toArray((err, data) => {
            res.send(data);
        });
    })
});

app.get("/:grupo", (req, res) => {
    conn.then(client => {
        client.db("ciclas").collection("grupo").find({ _id: ObjectId(req.params.grupo) }).toArray((err, data) => {
            res.send(data[0]);
        });
    });
});

app.post("/", (req, res) => {
    conn.then(client => {
        req.body["miembros"] = [];
        req.body["publicaciones"] = []
        client.db("ciclas").collection("grupo").insertOne(req.body);
        res.send("El grupo ha sido creado");
    });
});

module.exports = router;