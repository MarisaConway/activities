const mongoose = require('mongoose'),
fs = require('fs'),
path = require('path')
models_path = path.join(__dirname, "../models"),
models = fs.readdirSync(models_path); //syncrouness function

module.exports = function(DB_NAME){
    mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`); //thsi is how were passing the DB NAME
    for(let model of models) {
        if(model.endsWith('.js')){
            require(path.join(models_path, model)); //cpy this each time gets a list of models and requires them
        }
    }

}