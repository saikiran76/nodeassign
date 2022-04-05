const mongoose = require(mongoose);

module.exports = function(){
    mongoose.connect('mongodb://localhost/auth');
    mongoose.connect.once('open', function(){
        console.log('connection established');
    }).on('error', function(error){
        console.log(error);
    })
}