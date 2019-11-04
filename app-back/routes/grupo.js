const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const uri = "mongodb+srv://admin:Admin1234@cluster0-7qmuh.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var conn = client.connect();

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    conn.then(client =>{
        client.db("db").collection("grupo").find({}).toArray((err, data) => {
            res.send(data);
        });
    })
});

router.get("/:grupo", (req, res) => {
    conn.then(client => {
        client.db("db").collection("grupo").find({ _id: ObjectId(req.params.grupo) }).toArray((err, data) => {
            res.send(data[0]);
        });
    });
});

router.post("/", (req, res) => {
    conn.then(client => {
        req.body["miembros"] = [];
        req.body["publicaciones"] = []
        client.db("db").collection("grupo").insertOne(req.body);
        res.send("El grupo ha sido creado");
    });
});
router.get('/publicaciones/', function (req, res, next) {
    conn.then(client => {
        client.db("db").collection("publicacion").find({}).toArray((err, data) => {
            res.send(data)
        });
    });
});

module.exports = router;