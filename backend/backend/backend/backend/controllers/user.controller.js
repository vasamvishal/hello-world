const { check,validationResult } = require('express-validator');
const service = require('../services/user-service');
// var expressValidator = require('express-validator');
// const express=require("express"); 
// const server=express(); 

class UserController {
    register(req, res) 
    {     
        // let email=req.body.email;
        // let password=req.body.password;
        //  req.checkBody(email,'Invalid username').isEmail();
        // req.checkBody(password,'Invalid password').isLength({ min: 6 }).isAlphanumeric();
        // const errors = validationResult(req);
        //  if (!errors.isEmpty()) {
        //      return res.status(422).json({ errors: errors.array() })
        //    }

        service.register(req.body, (err, data) => {
            if (err)
                res.status(422).send(err);
            else
                res.status(200).send(data);
        })

    }

    login(req,res)
    {
       
        service.login(req.body, (err, data) => {
            if (err)
                res.status(422).send(err);
            else
                res.status(200).send(data);
        })
            
        }        
    }


module.exports = new UserController();