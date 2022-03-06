const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //validation a
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}
//5(a)
const updatCover= async function(req,res){
    let hardcovered= await publisherModel.find({name:{$in:["penguin,Harper Collins"]}}).select({_id:1})
    res.send({data:hardcovered})
//     for(let i=0;i<hardcovered.length;i++){
//     let ishardco= await bookModel.updateMany(
//     {publisher:{$eq:hardcovered[i]._id}},
//     {$set:{isHardCover:true}},
//     {new:true}

//     )
//     res.send(ishardco)
// }
}

//5(b)
const ratings= async function(req,res){
    let rating1= await authorModel.find( {rating:{$gt:3.5}}).select({_id:1})
    for(let j=0;j<rating1.length;j++){
    let updatePrice= await bookModel.updateMany(
        {author:{$eq:rating1[j]._id}},
        {$inc:{price:10}})
    res.send(updatePrice)
}
}
 



module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.updatCover=updatCover
module.exports.ratings=ratings