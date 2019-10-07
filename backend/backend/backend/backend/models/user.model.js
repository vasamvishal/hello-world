const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'easy-notes';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  db = client.db(dbName);
});

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
});
const User =  mongoose.model('user',userSchema);

class UserModel{
    create(body, callback){
       
        const user = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password

        })
        user.save((err, data) => {
            if(err){
                callback(err)
            }else{
                callback(null, data)
            }
        })
    }
 
    login(body,callback)
    {  
        console.log(body); 
        
        let collection = db.collection('users'); 
       
        collection.findOne({email:body.email},(err,result) =>
        {
            console.log(result);
          
            if(err)
                callback(err)
            else if(!result)
            {
                  
                callback({message:"User not found"})
            }
            else{
             if(body.email == result.email && body.password == result.password)
                callback(null,result.email)
            }
        })

    
    }
}
module.exports = new UserModel();