var mongoose = require('mongoose');
var Competitors = require('./competitors');

const url = 'mongodb://@ds019766.mlab.com:19766/db_ringapp2018';
const options = {useNewUrlParser: true, user: 'db_usr', pass:'db_pass1'};

module.exports = {
    getAllCompetitions(req, res,next) {
        mongoose
        .connect(url,options)
        .then(async()=> {
            const result = await Competitors.find({}); //returns all the competitions
            if(result) res.json(result);
            else res.status(404).send('not found');
            
        })
        .catch(err => {
            console.error('some error occurred', err)
            res.status(500).send(err.message);
        })
    },
    SetSomething(req,res,next) {
        mongoose
            .connect(url,options)
            .then(async()=>{
                /**/ 
                if(result) res.json(result);
                else res.status(404).send('not found'); 
            })
            .catch(err => {
                console.error('some error occurred', err)
                res.status(500).send(err.message);
            })
    },
    getCompetitionByCountryYear(req,res,next) {
        mongoose
        .connect(url,options)
        .then(async()=> {
            const {id=null, country = null} = req.params;
            const result = await Competitors.find({id,country}); //for example ../1/Canada
            if(result) res.json(result);
            else res.status(404).send('not found');
        })
        .catch(err => {
            console.error('some error occurred', err)
            res.status(500).send(err.message);
        })
    }
}