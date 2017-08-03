var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

    router.use(bodyParser.urlencoded({ extended: true }))
	router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))


	//build the REST operations at the base for news
	//this will be accessible from http://localhost:3000/news if the default route for / is left unchanged
router.route('/')
    //GET all news
    .get(function(req, res, next) {
        //retrieve all news from Monogo
        mongoose.model('Paper').find({}, function (err, news) {
              if (err) {
                  return console.error(err);
              } else {
                  //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
                  res.format({
                      //HTML response will render the index.jade file in the views/news folder. We are also setting "news" to be an accessible variable in our jade view
                    html: function(){
                        res.render('news/index', {
                              title: 'My Favourite NewsPaers',
                              "news" : news
                          });
                    },
                    //JSON response will show all news in JSON format
                    json: function(){
                        res.json(NewsPaper);
                    }
                });
              }     
        });
    })
    //POST a new paper
    .post(function(req, res) {
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        var name = req.body.name;
        var language = req.body.language;
        var dayofdate = req.body.dayofdate;
        var isbest = req.body.isbest;
        //call the create function for our database
        mongoose.model('Paper').create({
            name : name,
            language : language,
            dayofdate : dayofdate,
            isbest : isbest
        }, function (err, paper) {
              if (err) {
                  res.send("There was a problem adding the information to the database!");
              } else {
                  //Paper has been created
                  console.log('POST creating new paper: ' + paper);
                  res.format({
                      //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
                    html: function(){
                        // If it worked, set the header so the address bar doesn't still say /add user
                        res.location("news");
                        // And forward to success page
                        res.redirect("/news");
                    },
                    //JSON response will show the newly created paper
                    json: function(){
                        res.json(paper);
                    }
                });
              }
        })
    });


/* GET New Paper page. */
router.get('/new', function(req, res) {
res.render('news/new', { title: 'Add News Paper' });
});

// route middleware to validate :id
router.param('id', function(req, res, next, id) {
    //console.log('validating ' + id + ' exists');
    //find the ID in the Database
    mongoose.model('Paper').findById(id, function (err, paper) {
        //if it isn't found, we are going to repond with 404
        if (err) {
            console.log(id + ' was not found');
            res.status(404)
            var err = new Error('Not Found');
            err.status = 404;
            res.format({
                html: function(){
                    next(err);
                 },
                json: function(){
                       res.json({message : err.status  + ' ' + err});
                 }
            });
        //if it is found we continue on
        } else {
            //comment this next line if you Don't want to see every JSON document response for every GET/PUT/DELETE call
            console.log(paper);
            // once validation is done save the new item in the req
            req.id = id;
            // go to the next thing
            next(); 
        } 
    });
});


router.route('/:id')
  .get(function(req, res) {
    mongoose.model('Paper').findById(req.id, function (err, paper) {
      if (err) {
        console.log('GET Error: There was a problem retrieving: ' + err);
      } else {
        console.log('GET Retrieving ID: ' + paper._id);
        var paperdayofdate = paper.dayofdate.toISOString();
        paperdayofdate = paperdayofdate.substring(0, paperdayofdate.indexOf('T'))
        res.format({
          html: function(){
              res.render('news/show', {
                "paperdayofdate" : paperdayofdate,
                "paper" : paper
              });
          },
          json: function(){
              res.json(paper);
          }
        });
      }
    });
  });


//GET the individual paper by Mongo ID
router.get('/:id/edit', function(req, res) {
    //search for the paper within Mongo
    mongoose.model('Paper').findById(req.id, function (err, paper) {
        if (err) {
            console.log('GET Error: There was a problem retrieving: ' + err);
        } else {
            //Return the paper
            console.log('GET Retrieving ID: ' + paper._id);
            //format the date properly for the value to show correctly in our edit form
          var paperdayofdate = paper.dayofdate.toISOString();
          paperdayofdate = paperdayofdate.substring(0, paperdayofdate.indexOf('T'))
            res.format({
                //HTML response will render the 'edit.jade' template
                html: function(){
                       res.render('news/edit', {
                          title: 'Paper' + paper._id,
                        "paperdayofdate" : paperdayofdate,
                          "paper" : paper
                      });
                 },
                 //JSON response will return the JSON output
                json: function(){
                       res.json(paper);
                 }
            });
        }
    });
});


//PUT to update a paper by ID
router.put('/:id/edit', function(req, res) {
    // Get our REST or form values. These rely on the "name" attributes
    var name = req.body.name;
    var language = req.body.language;
    var dayofdate = req.body.dayofdate;
    var isbest = req.body.isbest;

   //find the document by ID
        mongoose.model('Paper').findById(req.id, function (err, paper) {
            //update it
            paper.update({
                name : name,
                language : language,
                dayofdate : dayofdate,
                isbest : isbest
            }, function (err, paperID) {
              if (err) {
                  res.send("There was a problem updating the information to the database: " + err);
              } 
              else {
                      //HTML responds by going back to the page or you can be fancy and create a new view that shows a success page.
                      res.format({
                          html: function(){
                               res.redirect("/news/" + paper._id);
                         },
                         //JSON responds showing the updated values
                        json: function(){
                               res.json(paper);
                         }
                      });
               }
            })
        });
});



//DELETE a Paper by ID
router.delete('/:id/edit', function (req, res){
    //find paper by ID
    mongoose.model('Paper').findById(req.id, function (err, paper) {
        if (err) {
            return console.error(err);
        } else {
            //remove it from Mongo
            paper.remove(function (err, paper) {
                if (err) {
                    return console.error(err);
                } else {
                    //Returning success messages saying it was deleted
                    console.log('DELETE removing ID: ' + paper._id);
                    res.format({
                        //HTML returns us back to the main page, or you can create a success page
                          html: function(){
                               res.redirect("/news");
                         },
                         //JSON returns the item with the message that is has been deleted
                        json: function(){
                               res.json({message : 'deleted',
                                   item : paper
                               });
                         }
                      });
                }
            });
        }
    });
});

module.exports = router;