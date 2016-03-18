var express = require('express');
var mongodb = require('../db');
var ATTRIBUTES = require('../statics');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  mongodb.getClasses(function(result){
    res.render('index', {title: 'Broken World', characterClasses: result});
  });

});

router.get('/character-sheet', function(req, res){
  mongodb.getClasses(function(classes){
    mongodb.getRaces(function(races){
      res.render('character-sheet', {title: 'Broken World', characterClasses: classes, characterRaces: races, attr:ATTRIBUTES});
    });
  });
});

router.get("/create-character", function(req, res){
  res.render('create-character', {title: 'Broken World'});
});

router.get("/introduction", function(req, res){
  res.render('introduction', {title: 'Introduction'});
});

router.post('/values', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var val = req.body.value;

  if (val === undefined || val === "") {
    res.send(JSON.stringify({status: "error", value: "Value undefined"}));
    return
  }
  mongodb.sendVal(val, res);
});

router.delete('/values/:id', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var uuid = req.params.id;

  if (uuid === undefined || uuid === "") {
    res.send(JSON.stringify({status: "error", value: "UUID undefined"}));
    return
  }
  mongodb.delVal(uuid);
  res.send(JSON.stringify({status: "ok", value: uuid}));
});

module.exports = router;
