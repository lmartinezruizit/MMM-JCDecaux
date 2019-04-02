var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var url = 'https://api.jcdecaux.com/vls/v1/stations?apiKey=YOUR_API_KEY';
var data = {

};

var success = function(data) {
    console.log(data);
};

/**
$.ajax({
    type: "GET",
    url: url,
    // data: data,
    success: success,
    // dataType: dataType
});
*/
var express = require('express');
var app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    if ('OPTIONS' == req.method){
        return res.send(200);
    }
    next();
});


    var xhr= new XMLHttpRequest();
    xhr.withCredentials = true;


const call_api = () => {
    app.get('/', function (req, res) {
        xhr.open('GET', url, false);
        xhr.send(null);

        if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            //var stations = JSON.parse(data).stations;
            res.json(data);
            }
        })
    }

    



var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port

setInterval(call_api, 3000);

console.log("Example app listening at http://%s:%s", host, port)
})
