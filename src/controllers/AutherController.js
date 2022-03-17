

const AutherModel= require("../models/autherModel")

const createauther= async function (req, res) {
    try{
    let data= req.body
    let savedData= await AutherModel.create(data)
    res.status(201).send({ status :true ,msg: savedData})
}

catch(err){
    res.status(500).send({error:err.message})
}
}




module.exports.createauther= createauther

