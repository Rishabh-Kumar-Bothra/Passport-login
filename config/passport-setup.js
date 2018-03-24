const passport = require('passport');
const GoogleStatergy = require('passport-google-oauth20');


passport.use(
    new GoogleStatergy({

    })
)