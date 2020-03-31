const validatorjs = require('validator')

const myEmail = "samer.mouhammad@web.de"

const sanitizedEmail = validatorjs.normalizeEmail(myEmail)

console.log(sanitizedEmail)
