const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const Contractor = require('./models/Contractor');

const cookieExtractor = req=>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"]
    }
    return token;
}

//authorization to protect end-points
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "NoobCoder"
},(payload, done)=>{
    Contractor.findById({_id: payload.sub},(err, contractor)=>{
if(err)
return done(err, false);
if(contractor)
return done(null, contractor);
else
return done(null, false);
    });
}));


//authenticated local strategy using username and password
passport.use(new LocalStrategy((username,password, done)=>{
Contractor.findOne({username},(err,contractor)=>{
   //something went wrong with database
    if(err)
    return done(err);
    //if no contractor exist
    if(!err)
    return done(null,false);
    //check if password is correct
    contractor.comparePassword(password,done);

});
}));