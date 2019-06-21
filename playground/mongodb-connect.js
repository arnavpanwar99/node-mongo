const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect( 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, ( error, client ) => {
    if(error){
        return console.log('unable to connect to the database server')
    }
    console.log('connected successfully')
    const db = client.db('TodoApp');
    /*db.collection('Todos').insertOne( {
        text: 'Something to do',
        completed: false
    }, ( err, result ) => {
        if(err){
            return console.log(err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    } )*/
    
    /*db.collection('user').insertOne({
        name: 'Arnav', 
        age: 19,
        location: 'Ailum'
    }, (err, result) => {
        if( err ){
            return console.log( err )
        }
        console.log(JSON.stringify(result.ops, undefined, 2), result.ops[0]._id.getTimestamp() )
    })*/

    client.close();
} )