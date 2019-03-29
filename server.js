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