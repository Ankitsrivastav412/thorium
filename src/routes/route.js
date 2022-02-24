const express = require('express');
const router = express.Router();

//router.get('/test-me', function (req, res) {
 //   res.send('My first ever api!')
//});

//router.get('', function(req,res){
  // res.send('Server Working Properly')
//});
    
// problem 1.

let persons= [

    {
    
    name: "PK",
    
    age: 10,
    
    votingStatus: false
    
    },
    
    {
    
    name: "SK",
    
    age: 20,
    
    votingStatus: false
    
    },
    
    {
    
    name: "AA",
    
    age: 70,
    
    votingStatus: false
    
    },
    
    {
    
    name: "SC",
    
    age: 5,
    
    votingStatus: false
    
    },
    
    {
    
    name: "HO",
    
    age: 40,
    
    votingStatus: false
    
    }
    
    ]
     let Eligibleperson = []
    router.post("/query",function(req,res) {
        let input = req.query.votingage
    for(let i =0; i<persons.length; i++){
        if(persons[i].age>input){
            persons[i].votingStatus = true
            Eligibleperson.push(persons[i])
        }
        

        
    }
    console.log(Eligibleperson)
    res.send({result : Eligibleperson, status : true})



    })

module.exports = router;