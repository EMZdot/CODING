//
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var port = 8081;
var app = express();

// _______
//wikipedia

// app.get('/wikipedia', function(req, res) {
//
//   var url = "https://da.wikipedia.org/wiki/Lufthavnsterminal";
//   request(url, function(error, response, html) {
//     if (!error) {
//
//       var wiki_data = {
//         title: '',
//         img: '',
//         paragragh: ''
//       };
//
//       var $ = cheerio.load(html);
//       $('#content').filter(function() {
//         wiki_data.title = $(this).find('h1').text();
//         wiki_data.img = $(this).find('img').first().attr('src');
//         //wiki_data.img = $(this).find('img:nth-of-type(2)').attr('src');
//         wiki_data.paragragh = $(this).find('p').first().text();
//       });
//       res.send(wiki_data);i
//     }
//   });
// });
//res.send(html);
//  res.send('im hungry, im getting hangry');
// ---------------


// app.get('/imdb', function(req, res) {
//   var url = "https://www.imdb.com/chart/top";
//   request(url, function(error, response, html) {
//
//     if( !error ){
//
//       var imdb_data = [];
//
//       var $ = cheerio.load(html);
//
//       $('.lister').filter(function(){
//         $(this).find('tr').each(function(i, element) {
//
//           imdb_data[i] = "'" + $(this).find('img').attr('src') + "'";
//         });
//       });
//
//       res.send(imdb_data);
//
//       fs.writeFile('imdb_output.js',"var imdb_output = [" + imdb_data + "]" , function(error){
//         console.log("file is writting successfully!");
//       });
//     }
//   });
// });


app.get('/male', function(req, res) {
  var url = "http://www.meet-an-inmate.com/male/";

  request(url, function(error, response, html) {

    if (!error) {

      var list_of_inmates_images = [];
      var list_of_inmates_urls = [];

      var list_of_all_text = [];
      var index = 0;

      var $ = cheerio.load(html);

      // use CSS selectors to find the right DIV
      $('#table160').filter(function() {
        $(this).find('tr').each(function(index1, element) {
          $(this).find('td').each(function(index2, element) {

            var oldimageLink = "'" + $(this).find('img').attr('src');
            var newimageLink = oldimageLink.substring(3);
            var imageLink = '"'+'www.meet-an-inmate.com' + newimageLink+'"';

            var oldpageUrl = "'" + $(this).find('a').attr('href');
            var newpageUrl = oldpageUrl.substring(3);
            var pageUrl = 'www.meet-an-inmate.com' + newpageUrl;


            list_of_inmates_images.push(imageLink);
            list_of_inmates_urls.push(pageUrl);

          });
        });

      });

      if (list_of_inmates_urls.length > 0) {
        list_of_inmates_urls.forEach(function(url) {
          request({
            url: url,
            json: true
          }, function(err, res, bodyData) {
            // var _$ = cheerio.load(bodyData);
            list_of_all_text.push(bodyData);
          });
        });
      }

      res.send(list_of_inmates_images);

      fs.writeFile('males.js',"var male_output = [" + list_of_inmates_images + "]" , function(error){
        console.log("file is writting successfully!");
      });
    }
  });
});














app.get('/ladies', function(req, res) {
  var url = "http://www.meet-an-inmate.com/ladies/";

  request(url, function(error, response, html) {

    if (!error) {

      var list_of_inmates_images = [];
      var list_of_inmates_urls = [];

      var list_of_all_text = [];
      var index = 0;

      var $ = cheerio.load(html);

      // use CSS selectors to find the right DIV
      $('#table160').filter(function() {
        $(this).find('tr').each(function(index1, element) {
          $(this).find('td').each(function(index2, element) {

            var oldimageLink = "'" + $(this).find('img').attr('src');
            var newimageLink = oldimageLink.substring(3);
            var imageLink = '"'+'www.meet-an-inmate.com' + newimageLink+'"';

            var oldpageUrl = "'" + $(this).find('a').attr('href');
            var newpageUrl = oldpageUrl.substring(3);
            var pageUrl = 'www.meet-an-inmate.com' + newpageUrl;


            list_of_inmates_images.push(imageLink);
            list_of_inmates_urls.push(pageUrl);

          });
        });

      });

      // if(list_of_inmates_urls.length > 0) {
      //   list_of_inmates_urls.forEach(function(url){
      //     request({
      //       url: url,
      //       json: true
      //     }, function(err, res, bodyData){
      //       // var _$ = cheerio.load(bodyData);
      //       list_of_all_text.push(bodyData);
      //     });
      //   });
      // }

      res.send(list_of_inmates_images);

      fs.writeFile('females.js',"var female_output = [" + list_of_inmates_images + "]" , function(error){
        console.log("file is writting successfully!");
      });
    }
  });
});



app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
