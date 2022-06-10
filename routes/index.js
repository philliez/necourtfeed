var express = require('express');
var router = express.Router();
let Parser = require('rss-parser');
let parser = new Parser();

/* GET home page. */
router.get('/', async function(req, res, next) {



  let feed = await parser.parseURL('https://ecf.ned.uscourts.gov/cgi-bin/rss_outside.pl');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

res.render('index', { title: 'Courtfeed test api',  data: feed});
});

module.exports = router;
