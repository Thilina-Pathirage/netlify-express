const express = require('express');
const serverless = require('serverless-http');
var request = require("request");
const app = express();
const router = express.Router();

router.get('/blog',(req,res) => {
    request(
        "https://www.fossnsbm.org",
        function(error, response, body){
            if(!error && response.statusCode == 200){
                res.json({
                    'servise-name':'Blog',
                    'stats': 'Active'
                });
            }else{
                res.json({
                    'servise-name':'Blog',
                    'stats': 'Inactive'
                });
            }
        }
    );
});


app.use('/', router)
module.exports.handler = serverless(app);