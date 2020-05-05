const validatorjs = require('validator')

const myEmail = "samer.mouhammad@web.de"

const sanitizedEmail = validatorjs.normalizeEmail(myEmail)

const name = " Samer "

const sanitizedName = validatorjs.trim(name)

console.log(sanitizedName)
