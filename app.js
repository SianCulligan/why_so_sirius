'use strict'



//ON PAGE LOAD - ONLY SHOW HOME PAGE - HIDE ALL OTHER DIVS
$( document ).ready(function() {
    $('#showHouse').hide();
    $('#divOne').hide();
    $('#pink').hide();
    $('#blue').hide();
    $('#divTwo').hide();
    $('#homePage').show();
})

// $('#pink').on('click', function (e) {
//     $('#divTwo').hide();
//     $('#divOne').show();
//   });

//   $('#blue').on('click', function (e) {
//     e.preventDefault();
//     $('#divOne').hide();
//     $('#divTwo').show();
//   });


// ONCE APPLY BUTTON IS CLICKED, HIDE HOME PAGE, SHOW SORTED PAGE
 
  
  
  $('form').on('submit', function(e){
    e.preventDefault();
  //   let total = parseInt(e.target.favClass.value) + parseInt(e.target.companionAnimal.value) + parseInt(e.target.wandType.value) + parseInt(e.target.gift.value)+ parseInt(e.target.book.value);
  //   console.log("total", Math.round(total/5));
  //   let roundedTotal = Math.round(total/5);          
  //   console.log("rounded number",roundedTotal);
  //   finalQuizNumber.push(roundedTotal);
    $('#showHouse').show();
    $('#divOne').hide();
    $('#pink').hide();
    $('#blue').hide();
    $('#divTwo').hide();
    $('#homePage').hide();
});

// let finalQuizNumber = [];
// console.log("final sort",sortedHouse);

// function findMyHouse(request, response) {
//   let magicNumber = finalQuizNumber;
//   const url = `https://hp-houses-api.herokuapp.com/`;
//   superagent.get(url)
//     .then(data => {
//       // const findthenumber = data.body.rival[magicNumber];
//      let findthenumber = response.send(data[magicNumber].houseName);
//       console.log("this should return house name",findthenumber);
//     })};

//   findMyHouse();







  // const url = `https://hp-houses-api.herokuapp.com/`;
  // superagent.get(url)
  //   .then(data => {
  //     const gitHouse = data[0].magicNumber;
  //     for (let i = 0; i < 4; i++ ){
  //       if(roundedTotal === 1) {
  //         sortedHouse.push(`Gryffindor`);
  //       } else if (roundedTotal === gitHouse) {
  //         sortedHouse.push(data[i].houseName)
  //       }
  //     } 

































//   'use strict'

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const superagent = require('superagent');
// const pg = require('pg');
// const PORT = process.env.PORT;
// const app = express();
// require('ejs');
// app.use(cors());

// app.get('/weather', weatherHandler);

// app.use(express.static('./public'));
// app.set('view engine', 'ejs');

// app.get('/', renderIndex);
// app.get('/harryporter', apiHandler);

// function renderIndex(req, res) {

//   res.status(200).render('./index');
// }

// function apiHandler(req, res) {
//   let URL = `https://www.potterapi.com/v1/characters?key=$2a$10$LndczsEp4R/F8gnZKCS0x.oeqF6WSS7sP9xnYax4nYpB.hu8xwKse`;
//   superagent.get(URL)
//     .then(data => {

//       // console.log(data.body)
//       res.send(data.body);

//     })

//     .catch(() => errorHandler('error 500!! something has wrong on  apiHandler function', req, res));
// }


// function Weather (data) {
//   this.icon = data.icon;
//   this.summary = data.summary;
// }

// function weatherHandler(req, res) {
//   let weatherURL = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/54.939196,-3.929788`;
//   superagent.get(weatherURL)
//     .then(data => {
//       const weatherForecast = new Weather(data.body.currently);
//       console.log(weatherForecast);
//       res.send(weatherForecast);
//     })
//     .catch ((err) => errorHandler(`error 500!! something has wrong on  weatherHandler function, ${err.message}`, req, res));
// }


// // const client = new pg.Client(process.env.DATABASE_URL);

// // client.on('error', err => console.error(err));
// // app.get('/', (request, response) => {
// //   response.send(`It's alllllive!`);
// // });

// //helper functions (error catching)


// function errorHandler(error, request, response) {
//   response.status(500).send(error);
// }

// //server "listener"

// // app.get('app.js', aliveAgain);


// app.listen(PORT, () => console.log(`Server up on port ${PORT}`))