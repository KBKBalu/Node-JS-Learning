var express = require('express');
var app = express();

//Simple request time logger
app.use(function(req, res, next){
   console.log("A new request received at " + Date.now());
   
   /*This function call is very important. It tells that more processing is
   required for the current request and is in the next middleware*/

   function bar(param) {
    console.log(param);
}

function foo(param, done) {
    if(param == 1) {
        return done(param);
    }
}

foo(1, bar);

   next();
});
app.listen(8081);
console.log('Server Running at 8081 Port');
