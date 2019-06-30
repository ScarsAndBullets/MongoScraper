// Controller for Headlines

// Add scripts for scrape and makeDate
const scrape = require("../scripts/scrape");
const makeDate = require("../scripts/date");

// Add Headline and Note Mongoose models
const Headline = require("../models/Headline");

module.exports = {
  fetch: function (cb) {
    scrape(function (data) {
      var articles = data;
      for (var i = 0; i < articles.length; i++) {
        articles[i].date = makeDate();
        articles[i].saved = false;
      }

      Headline.collection.insertMany(articles, { ordered: false }, function (error, docs) {
        cb(err, docs);
      });
    });
  },
  delete: function (query, cb) {
    Headline.remove(query, cb);
  },
  get: function (query, cb) {
    Headline.find(query)
      .sort({
        _id: -1
      })
      .exec(function (err, doc) {
        cb(doc);
      });
  },
  update: function (query, cb) {
    Headline.update({ _id: query._id }, {
      $set: query
    }, {}, cb);
  }
}