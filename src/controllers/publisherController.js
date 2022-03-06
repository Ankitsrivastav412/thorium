const publisherModel = require("../models/publisherModel");

const createPublisher = async function (req,res) {
let publisherdata = req.body;
let savedpublisherdata = await publisherModel.create(publisherdata)

res.send( {data : savedpublisherdata});

}

module.exports.createPublisher = createPublisher