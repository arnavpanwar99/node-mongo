const { MongoClient } = require('mongodb');

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, ( err, client ) => {
    if(err){
        return console.log(err)
    }
    console.log('connected to mongodb server successfully');
    const db = client.db('TodoApp');
    db.collection('Todos').findOneAndUpdate( { completed: false }, {
        $set: { completed: true },
        $inc: { age: 2 }
    }, { returnOriginal: false } ).then((data) => {
        console.log(data)
    })
} )