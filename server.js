var express = require('express');
var axios = require('axios');
var app = express();
app.use(express.static("myApp"));
app.listen(8000, 'localhost');
console.log('MyProject Server is Listening on port 8000');

app.get('/', function(req, res) {
    console.log('Got response');
    /*  */
    var url = req.query.params;
    console.log(url);
    axios.get(url)
        .then(function(response) {
            console.log("response");
            res.send(response.data);

        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })

});

app.get('/productinfo', function(req, res) {
    console.log('In products Info Server');
    var url = req.query.params;
    console.log(url);
    axios.get(url)
        .then(function(response) {
            //console.log(response);
            res.send(response.data);
        })
        .catch(function(error) {
            //handles error and send appropriate msg to client
            console.log(error);
        })

});

app.get('/getpics', function(req, res) {

    var URI = req.query.params;
    console.log("************************************************************")
    console.log(URI)
    console.log("********************************************************");
    axios.get(URI)
        .then(function(response) {
            console.log('Do I send data');
            res.send(response.data);
        })
        .catch(function(error) {
            console.log(error);
        })

});

app.get('/getsimilaritems', function(req, res) {
    console.log('In similar Items')
    var itemid = req.query.params
    var url = "http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService&SERVICE-VERSION=1.1.0&CONSUMER-ID=YashShah-Yash-PRD-e16e2f149-341d2218&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemId=" + itemid + "&maxResults=20";

    axios.get(url)
        .then(function(response) {
            //console.log(response);
            res.send(response.data);
        }).catch(function(reserrorponse) {
            console.log(error)
        })
})