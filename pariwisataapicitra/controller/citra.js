const Citra = require("../model/citra");

const createCitra= (req, res) => {
    const citra = new Citra({
        nama : req.body.nama,
        lokasi : req.body.lokasi,
        suasana : req.body.suasana
    });

    //console.log(citra);
    citra.save().then((createdCitra)=>{
        res.status(201).json({
                message : "Data berhasil disimpan",
                bookId : createdCitra._id
        });
    });
   
};

const readCitra = (req, res)=>{
    Citra.find()
    .then((documents)=>{
        res.status(201).json({
            message : "Get Data Citra",
            citras : documents
        });
    });
};

const deleteCitra= (req, res) => {
    Citra.deleteOne({_id : req.params.id})
    .then((result)=>{
        res.status(200).json({
            message : "Data berhasil dihapus ",
            result : result
        });
    });
};

const updateCitra = (req, res) => {
   
     const citra = new Citra({
        _id : req.params.id,
        nama : req.body.nama,
        lokasi : req.body.lokasi,
        suasana : req.body.suasana
    });

    Citra.updateOne({_id : req.params.id}, citra)
    .then((hasil)=>{
        res.status(200).json({
            message : "Update Berhasil",
            result : hasil    
        });
    });

};


module.exports ={createCitra, readCitra, deleteCitra, updateCitra}
