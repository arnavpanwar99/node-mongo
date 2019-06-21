const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    },
    location: {
        type: String
    },
    createdAt: {
        type: Date
    }
})

const newUser = new User({
    name: 'Arnav',
    age: 19,
    location: 'Ailum',
    createdAt: new ObjectID().getTimestamp()
})

newUser.save().then((data) => console.log(data)).catch((err) => console.log(err));