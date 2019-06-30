const axios = require("axios");
const cheerio = require("cheerio");

let scrape = cb => {

  // Tell console what scrape.js is doing
  console.log(`\n**********************************\n 
  Scraping latest news and feature  \n 
  articles from KSL.com's home page:\n 
  **********************************\n`);

  axios.get("https://www.ksl.com")

    .then(response => {

      // Loads Axios request into cheerio, saved into $
      var $ = cheerio.load(response.data);

      // array for scraped data
      var articles = [];

      $('div[class="queue"]').find('div > div > div').each(function (i, element) {

        var headline = $(element).find('h2 > a').text().trim();
        var link = $(element).find('h2 > a').attr('href');
        var summary = $(element).find('h5').text().trim();

        if (headline && link && summary) {
          var headNeat = headline.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
          var linkNeat = link.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
          var summNeat = summary.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

          var dataToAdd = {
            headline: headNeat,
            link: linkNeat,
            summary: summNeat
          };
          articles.push(dataToAdd);
        }
      });
      console.log(articles)
      articles => cb
    })

    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

module.exports = scrape;