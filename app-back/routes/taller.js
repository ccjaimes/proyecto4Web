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
        client.db("db").collection("taller").find({}).toArray((err, data) => {
            res.send(data);
        });
    })
});

router.get("/:taller", (req, res) => {
    conn.then(client => {
        client.db("db").collection("taller").find({ _id: ObjectId(req.params.taller) }).toArray((err, data) => {
            res.send(data[0]);
        });
    });
});

router.post("/", (req, res) => {
    conn.then(client => {
        req.body["productos"] = [];
        req.body["servicios"] = [];
        client.db("db").collection("taller").insertOne(req.body);
        res.send("El taller ha sido creado");
    });
});

module.exports = router;