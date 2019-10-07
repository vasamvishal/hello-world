var jwt = require('jsonwebtoken');
checkToken=(req,res,next)=>{
    var Head = req.headers.token;
    req.authenticated = false;
    if (Head){
        jwt.verify(Head, 'secret', function (err, decoded){
            if (err){
                console.log(err);
                req.authenticated = false;
                req.decoded = null;
                next();
            } else {
                req.decoded = decoded;
                req.authenticated = true;
                next();
            }
        });
    }
}
module.exports={checkToken}
