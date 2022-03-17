const BlogModel = require("../models/blogModel")
const jwt = require("jsonwebtoken");
const autherModel = require("../models/autherModel")

const createblog = async function (req, res) {
    let data = req.body
    let savedData = await BlogModel.create(data)
    console.log(req.newAtribute)
    res.send({ msg: savedData })
}

let getBlog = async function (req, res) {
    try {
        let query = req.query
        let filter = {
            isdeleted: false,
            ispublished: false,
            ...query
        };
        let filterByquery = await BlogModel.find(filter)
        if (filterByquery.length == 0) {
            return res.status(400).send({ msg: "Blog Not Found" })
        }
        else {
            return res.status(200).send({ msg: filterByquery })
        }
    } catch (err) {
        res.status(500).send({ statue: false, msg: err.message })
    }


}




const updateblog = async function (req, res) {
    try {
        let updateblog = req.params.blogID
        let = await BlogModel.findById(updateblog)
        console.log(updateblog)
        if (!updateblog) {
            return res.status(404).send({ msg: "Invalid Blog" })
        }
        let updatedata = req.body;
        let updatedUser = await BlogModel.findOneAndUpdate({ _id: updateblog }, { title: updatedata.title, body: updatedata.body, tags: updatedata.tags, subcategory: updatedata.subcategory, ispublished: true }, { new: true, upsert: true });
        res.status(200).send({ status: true, data: updatedUser })
    } catch (err) {
        res.status(500).send({ Error: err.message })
    }
 
}


const deletebyId = async function (req, res) {
    try {
        let blogId = req.params.blogID
        const validId = await BlogModel.findById(blogId)
        if (!validId) {
            return res.status(404).send({ msg: "blog ID is Invalid" })
        }

        const deleteData = await BlogModel.findOneAndUpdate({ _id: blogId }, { isdeleted: true }, { new: true });
        res.status(200).send({ status: true, data: deleteData })
    } catch (err) {
        res.status(500).send({ Error: err.message })
    }
}


const deletebyQuery = async function (req, res) {
    try {
        let input = req.query

        if (Object.keys(input).length == 0)
            return res.status(400).send({ status: false, msg: "please provide input data" })

        let deletedBlog = await BlogModel.updateMany({ $and: [input, { isdeleted: false }] }, { $set: { isdeleted: true, deletedAt: Date.now() } }, { new: true })

        res.status(200).send({ data: deletedBlog })

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
// ///////

const login = async function (req, res) {
    
    let check = await autherModel.findOne({ password: req.body.password, email: req.body.email, isDeleted: false })
    if (check) {
        let payload = { _id: check._id }
        let token = jwt.sign(payload, 'Ankit')
        res.status(201).send({ "msg": "true", "data": check, "tokendetail": token })
    } else {
        res.send({ "msg": "false" })
    }
   
}

module.exports.createblog = createblog
module.exports.getBlog = getBlog
module.exports.updateblog = updateblog
module.exports.deletebyId = deletebyId
module.exports.deletebyQuery = deletebyQuery
module.exports.login = login