let express = require('express');
let passport = require('passport');
let router = express.Router();
/* GET home page. */
router.post('/',passport.authenticate('local.signup',{
    successRedirect: '../dashboard.html',
    failureRedirect: '/failure'
}));

module.exports = router;



