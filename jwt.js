var jwt = require('jsonwebtoken')
var secret = "Sanyam's_secret_code"
payload= {
    "name": "Sanyam",
    "Roll": 814802719,
    "branch": "CSE"
}

var token = jwt.sign(payload, secret,{
    expiresIn: "100s"
})

// console.log(token);

var isVerified = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2FueWFtIiwiUm9sbCI6ODE0ODAyNzE5LCJicmFuY2giOiJDU0UiLCJpYXQiOjE2NTU4NzkxMjAsImV4cCI6MTY1NTg3OTIyMH0.k2TsBKn4_2f7IWZvCiMYR2w7jRRYr8fT_kdR_TSKXRI", secret)

console.log(isVerified)