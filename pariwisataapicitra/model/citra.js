const mongoose = require("mongoose");

const citraSchema = new mongoose.Schema({
    nama : {type : String, required : true},
    lokasi : {type : String, required : true},
    suasana : [{type : String, required : true}]
});

module.exports = mongoose.model("Citra", citraSchema);

