const express = require('express');
const ctrl = require('./controller/controller');
const morgan = require('morgan');

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.get('/competitions', ctrl.getAllCompetitions);
app.post('/competitions', ctrl.updateCountryOrigin);
app.get('/competitions/:id/:country', ctrl.getCompetitionByCountryYear);
app.get('*', ctrl.openingPage);

app.listen(port,
    ()=> console.log('Express server ready for requests on:', port))