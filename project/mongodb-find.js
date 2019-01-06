 
 const {MongoClient,ObjectID} = require('mongodb');

 



MongoClient.connect('mongodb://localhost:27017/myFirstDb',{ useNewUrlParser: true },(err,client) => {
    if(err)
    {
        return console.log('Unable to connect to the MongoDB server');      
    }
    
    console.log('Connected to the MongoDB Server');
    const db = client.db('myFirstDb');

    db.collection('Users').find({}).count().then((count)=>{
         console.log('USERS Collection Count is :' + count);
        },(err) => {
         console.log('Unable to fetch data',err);
        });

    // db.collection('Users')
    //  .find({
    //      _id : new ObjectID('5c31cf0bc3b7e134148b83a8')
    //  })
    //  .toArray().then((docs)=>{
         
    //     // console.log ('basicDb');
    //     console.log(JSON.stringify(docs,undefined,2));
  
    // },(err) => {

    //     console.log('Unable to fetch data',err);
           
    // });
    
  client.close();

});