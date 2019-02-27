const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if(err){
  return console.log('Unable to connect to MongoDB server'); 
	       }
	     console.log('Connected to MongoDB server');


/* //delete Many
db.collection('Todos').deleteMany({text: 'something to create'}).then((result) => {
	console.log(result);
});

//delete One
db.collection('Todos').deleteOne({text: 'something to create'}).then((result) => {
	console.log(result);
});
//find One And Delete
db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	console.log(result);
}); */


//delete by ID
db.collection('users').findOneAndDelete({
_id: new ObjectID("5c6092d7791de208644d6548")
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});
}); 