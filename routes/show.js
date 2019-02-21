var router = require('express').Router()
const Company = require('../model/company');

const showTable = (req, res) => {

    var perPage = 10
    var page = req.params.page || 1

    Company
        .find({})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function (err, Result) {
            Company.count().exec(function (err, count) {
                if (err) return next(err)
                res.render('companyList', {
                    companies: Result,
                    current: page,
                    pages: Math.ceil(count / perPage)
                })

            })

        })
}

module.exports = {showTable}