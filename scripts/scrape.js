// Scrape script

const axios = require("axios");
const cheerio = require("cheerio");

// cb, the callback function as a parameter might not be necessary
let scrape = cb => {
  axios.get("https://www.ksl.com")
    .then(response => {
      let $ = cheerio.load(response);

      let articles = [];

      $(".headline").each((i, element) => {
        let head = $(this).children("h2").text().trim();
        let sum = $(this).children("h5").text().trim();

        if (head && sum) {
          let headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
          let sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

          let dataToAdd = {
            headline: headNeat,
            summary: sumNeat
          }

          articles.push(dataToAdd);

        }

      });

      console.log(articles)
      // Double check if "cb" is a function from another module.
      cb(articles);

    })
    .catch(error => {
      console.log(error);
    })
}

module.exports = scrape;