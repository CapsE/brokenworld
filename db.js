var mongoose = require('mongoose');

var boni = mongoose.Schema({
    Str:Number,
    Sta:Number,
    Acc:Number,
    Dex:Number,
    Wil:Number,
    Int:Number,
    Cha:Number,
    Com:Number,
    Ste:Number,
    Per:Number
});

var schema = mongoose.Schema({name: String, img: String, description: String, boni:[boni]});
var characterClasses = mongoose.model('character_classes', schema);

var characterRaces = mongoose.model('character_races', schema);

module.exports = {
    connectDB : function() {
        mongoose.connect(process.env.MONGODB_ADDON_URI);
    },

    getClasses : function(callback) {
        characterClasses.find(function(err, result) {
            if (err) {
                console.log(err);
                res.send('database error');
                return
            }
            callback(result);
        });
    },

    getRaces : function(callback){
        characterRaces.find(function(err, result){
            if (err) {
                console.log(err);
                res.send('database error');
                return
            }
            callback(result);
        });
    },

    sendVal : function(val, res) {
        var request = new Values({value: val});
        request.save(function (err, result) {
            if (err) {
                console.log(err);
                res.send(JSON.stringify({status: "error", value: "Error, db request failed"}));
                return
            }
            res.status(201).send(JSON.stringify({status: "ok", value: result["value"], id: result["_id"]}));
        });
    },

    delVal : function(id) {
        Values.remove({_id: id}, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
};
