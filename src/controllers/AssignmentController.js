const axios = require("axios");

 let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
         res.status(500).send({ msg: err.message })
    }
}


const getdistricts = async function (req,res){
    try{
let id = req.params.stateId
let options = {
    method : "get",
    url : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
}
let Result = await axios (options)
console.log (Result);
let data = Result.data
res.status(200).send({msg:data,status:true})
}

catch (err){
    console.log(err)
    res.staus(500).send({msg:err.message})
}
}

const getByPin = async function (req,res){
    try{
        let pin = req.query.pincode;
        let date = req.query.date;
        console.log(`query params are: ${pin} ${date}`);
        let options = {
            method : "get",
            url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`

        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getByOtp = async function (req,res){
    try{
        let otp = req.body
        let options = {
            method :"post",
            url : `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data : otp
        }
        let result = await axios(options)
        //   console.log(result.data)
          res.status(200).send({msg:result.data})
    } catch(err){
        console.log(err)
        res.status(500).send({msg:err.message})
    }
}

// Assignment problem -1
const getByDistrictId = async function (req,res){
    try{
        let id = req.query.district_id;
        let date = req.query.date;
        let options = {
            method : "get",
            url :`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options)
        // console.log(result.data)
        res.status(200).send({msg:result.data})
    } catch(err){
        console.log(err)
        res.status(500).send({msg:err.message})
        }


    }
// Assignment problem -2
    const getWeather = async function (req, res) {
        try {
            let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
            const cityObject = [];
            for (let i = 0; i < cities.length; i++) {
                let city={city:cities[i]}   // creating Object --> {city:"Banglore"}
                let options = {
                    method: "get",
                    url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=913bcc688734d541732a003b28d9cd38`
                }
                let result = await axios(options);
                
                let temperature = result.data.main.temp;
                city.temp=temperature    // adding a key "temp" to a object city and set value "temperature"
    
                cityObject.push(city) 
                // pushing the object with "city" key and "temp" key in empty "cityObject" array.
            }
            let sortedCityArr= cityObject.sort((a,b)=>(a.temp-b.temp))
            res.send(sortedCityArr)
    }
        catch (err) {
            res.status(400).send(err)
        }

    }

// Assignment problem-3


const meme = async function (req,res){
    try{
        template_id = req.query.template_id
        text0 = req.query.text0
        text1 = req.query.text1
        username= req.query.username
        password = req.query.password

     let options = {
         method : "post",
         url :`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
     }
     let result = await axios(options)
     res.status(200).send({msg:result.data})

    }catch (err){
        console.log(err)
        res.status(err).send({msg:message.err})
        
    }

}




module.exports.getStates=getStates
module.exports.getdistricts=getdistricts
module.exports.getByOtp=getByOtp
module.exports.getByPin=getByPin
module.exports.getByDistrictId=getByDistrictId
module.exports.getWeather=getWeather
module.exports.meme = meme