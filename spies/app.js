const db = require('./db');

module.exports.handleSignUp = (email,password)=>{
   // check if email exists..
   db.saveUser({
       email: email,
       password: password
   });
}