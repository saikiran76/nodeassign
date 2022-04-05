const localStrat = require('passport-local').Strategy;
const mongoose = require('mongoose');
const passport = require('passport');

const User = require('./models/modeluser');

passport.use(new localStrategy({ usernameField: 'email' }, function(email, password, done) {
    const user = User.findOne({ email: email }).then(function(user) {
        if (user == null) {
            return done(null, false, { message: 'wrong credentials' });

        } else {
            return done(null, false, { message: "wrong password" });
        }



    });

}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
})
passport.deserializeUser(function(id, done) {
    const fetch = (id) => User.findById(id)
    fetchuser(id).then(function(user) {
        return done(null, user);

    })
})