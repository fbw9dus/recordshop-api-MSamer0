const {check} = require('express-validator')

exports.userValidationRules = [
    // check email 
    check('email').isEmail(),
    // check firstname
    check('firstName').isLength({min: 2})
]