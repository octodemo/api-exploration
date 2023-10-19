// get github username and public information from api.github.com

var request = require('request');
var gitHubUsername = "pariima";

var getProfile = function (username) {
    var options = {
        url: 'https://api.github.com/users/' + username,
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
           console.log("hello my friends from NYIT", response);
        }
    })
}

getProfile(gitHubUsername)
