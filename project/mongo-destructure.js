 //const MongoClient = require('mongodb').MongoClient;


// var user = {
//     name : 'Venkadesh',
//     age : 29,
//     location : 'Chennai'
// }

// var {location} = user;
// console.log(location);

const {MongoClient,ObjectID} = require('mongodb');          // Destructuring


var obj = new ObjectID();
console.log(obj);





MongoClient.connect('mongodb://localhost:27017/myFirstDb',{ useNewUrlParser: true },(err,client) => {
    if(err)
    {
        return console.log('Unable to connect to the MongoDB server');      
    }
    
    console.log('Connected to the MongoDB Server');
    const db = client.db('myFirstDb');
    
  client.close();

});