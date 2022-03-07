const express = require('express');
const bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const { globalMiddleWare } = require('./middleWare/middleWare.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Ankitsrivastav412:G1fTVr3JcQfPfLGB@myfunctionup.f4mg0.mongodb.net/Ankit412?authSource=admin&replicaSet=atlas-rbbsrv-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use(globalMiddleWare)

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
