const { count } = require("console")
const bookModel = require("../models/bookModel")

const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1, authorName:1, _id:0})
    res.send({msg:allBooks })
}

const getBooksInYear= async function(req, res){
    let desYear= req.query.year
    let result= await BookModel.find({year : {$eq:desYear}})
    res.send({msg:result})
}

const getParticularBooks= async function (req, res){
    let name= req.query.name
    let fYear=req.query.year
    let authName=req.query.author
    let outcome= await BookModel.find({ $or : [{bookName : name}, {year: fYear}, {authorName: authName}]})
    res.send({msg:outcome})
}

const getXINRBooks= async function (req, res){
    let output=  await BookModel.find({"price.indianPrice":{$in:["100INR", "200INR", "500INR"]} })
    res.send({msg:output})
}

const getRandomBooks= async function (req,res){
    let resu= await BookModel.find({$or:[{stockAvailable: true }, {pages:{$gt:500}}]})
    res.send({msg:resu})
}


module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks