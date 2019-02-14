// we are looking for a mongo connect
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

/*var user = {name: 'souad', age: 25};
var {name} = user;
console.log(name);*/

//to connect to mongoclient have 2 arguments
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err) {
return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

/* db.collection('Todos').insertOne({
	text: 'something to create',
	completed: false
},(err, result) => {
	if(err) {
		return console.log('Unable to insert todo', err);
		    }
	console.log(JSON.stringify(result.ops, undefined, 2));
}); */
/*db.collection('users').insertOne({
	name: 'souad bouzid',
	age: 25, 
	locations: 'CASABLANCA',
},(err, result) => {
	if(err) {
		return console.log('Unable to insert todo', err);
		    }
	console.log(result.ops[0]._id.getTimestamp());
});*/
	
db.close();	
});

