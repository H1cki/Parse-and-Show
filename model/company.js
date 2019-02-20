var mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const companyScheme = new Schema({
  companyName: String,
  latestPrice: Number
});
const Company = mongoose.model("Company", companyScheme);

module.exports = Company;
