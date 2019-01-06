const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/myFirstDb',{ useNewUrlParser: true },(err,client) => {
    if(err)
    {
        return console.log('Unable to connect to the MongoDB server');      
    }
    
    console.log('Connected to the MongoDB Server');
    const db = client.db('myFirstDb');

    // db.collection('basicDb').insert({
    //     name : 'Venkadesh',
    //     age : 29,
    //     isMarried : false
    // }, (err,result) => {

    //     if(err)
    //     {
    //         return console.log('Unable to insert the document', err);
            
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
        
    // });

    // db.collection('Users').insertOne({
    //     name : 'Ramadoss',
    //     age : 55,
    //     location : 'Chennai'
    // },(err,result)=>{
    //     if(err)
    //     {
    //         return console.log('Unable to insert the document', err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));

    // });

    
    db.collection('User1').insertOne({
        name : 'Rani',
        age : 65,
        location : 'Sivakasi'
    },(err,result)=>{
        if(err)
        {
            return console.log('Unable to insert the document', err);
        }
        console.log(result.ops[0]._id.getTimestamp());

    });
    
  client.close();

});