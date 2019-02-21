var express = require('express');
var router = express.Router();
const Company = require('../model/company');
const axios = require('axios');

const Parse = (res, req) => {

  axios.get('https://iextrading.com/api/1.0/stock/market/collection/list?collectionName=in-focus')
    .then(response => {

      let { length } = Object.keys(response.data);


      for (let i = 0; i < length; i++) {

        let { companyName } = response.data[i];
        let { latestPrice } = response.data[i];

        Company.create({
          companyName: companyName,
          latestPrice: latestPrice
        }, function (err, doc) {

          if (err) return console.log(err);

          return console.log(doc)

        });

      }


    })

};



module.exports = { Parse }