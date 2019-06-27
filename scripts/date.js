const moment = require('moment');

let makeDate = () => {
  let formattedDate = moment().format("MMM Do YYYY");
  return formattedDate;
}

module.exports = makeDate;