const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/brand');

mongoose.Promise = global.Promise;
const brand = mongoose.model('branch',{
    id: String,
    brand: String,
    Date: String,
});

exports.addBrand = function(addObj,callback){
    let msg;
    addObj.save(function(err,ret){
        if(err){
            msg = "error"; 
        }else{
            msg = "sucessful";
        }
        callback(msg);
    });
};

exports.findAll = function (callback){
    brand.find(function(err,ret){
        if(err){
            console.log(err);
            callback(null);
        }else{
            callback(ret);
        }
    })
}

