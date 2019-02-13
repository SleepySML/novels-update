var express = require('express');
const passport = require('passport');
const session = require('express-session');
const app = express();
const config = require('../config');
const RedisStore = require('connect-redis')(session);

app.use(session({
    store: new RedisStore({
        url: config.redisStore.url
    }),
    secret: config.redisStore.secret,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.get("/", function(request, response){
    response.send("<h2>Привет Express!</h2>");
});

app.route('/api/novels').get((req, res) => {
    res.send({
        novels: [{ title: 'The last of them' }, { author: 'lucy' }]
        });
});

module.exports = app;