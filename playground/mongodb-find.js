const { MongoClient } = require('mongodb');
MongoClient.connect( 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, ( err, client ) => {
    if(err){
        return console.log(err)
    }
    console.log('successfully connected to mongodb server');
    const db = client.db('TodoApp');
    /*db.collection('Todos').find( { completed: true } ).toArray().then((data) => {
        console.log(JSON.stringify(data, undefined, 2))
    }).catch((err) => {
        console.log(err)
    })
    */
   db.collection('Todos').find().count().then((count) => {
       console.log(`count: ${count}`)
   }).catch((err) => {
       console.log(`error: ${err}`)
   })
   db.collection('Users').find( { name: 'Arnav' } ).toArray().then((data) => {
       console.log( JSON.stringify(data, undefined, 2) );
   }).catch((err) => {
       console.log(err)
   })
} )