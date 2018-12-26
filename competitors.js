const mongoose = require('mongoose');
const schema = {
    id: { type: Number, required:true },
    name: {type:String, required:true},
    country: { type: String, required:true },
    details: 
    {
         amount: { type: Number},
        sincewhen: {type:Number},
        creator: {type: String}
     }
}
const competitor_schema = new mongoose.Schema(schema);
const Competitor = mongoose.model('Competitor', competitor_schema);
module.exports = Competitor;
