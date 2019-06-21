const MongoClient = require('mongodb');
MongoClient.connect( 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, ( err, client ) => {
    if(err){
        return console.log(err);
    }
    console.log('successfully connected to mongodb server');
    const db = client.db('TodoApp');
    db.collection('Todos').deleteMany( {text: 'ignore everyone'} ).then((info) => {
        console.log(info)
    })
} )