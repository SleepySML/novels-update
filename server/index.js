var fs = require('fs');
var https = require('https');


const app = require('./app');
const port = process.env.PORT || 3000;

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app)
.listen(port, function (error) {
    if(error) throw error;
    console.log('The app listening on port 3000! Go to https://localhost:3000/')
})