const Competitors = require('../modules/competitors');
const consts = require('../consts');
const connection = require('../db');

module.exports = {
    openingPage(req,res,next) {
        res.send("Winter Competition application");
    },
    async getAllCompetitions(req, res,next) {    
        const result = await Competitors.find({}); //returns all the competitions
            if(result) res.json(result);
            else res.status(404).send('not found');
            
    },
    async updateCountryOrigin(req,res,next) {
        const {id =null , country = null} = req.body;   //send two parameters one is the id you want to change and two the new country name
        const result = await Competitors.findOneAndUpdate({id}, {$set:{country}}, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
        
            console.log(doc);
        });
        if(result) res.json(result);
         else res.status(404).send('not found'); 
    },
    async getCompetitionByCountryYear(req,res,next) {
          const {id=null, country = null} = req.params;
        const result = await Competitors.find({id,country}); //for example ../1/Canada will return the document with id 1 and country canada
        if(result) res.json(result);
        else res.status(404).send('not found');
    }
}