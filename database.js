//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*
Tip: If you need to create additional connections you can use mongoose.createConnection(). 
This takes the same form of database URI (with host, database, port, options etc.) 
as connect() and returns a Connection object).
*/



// Defining schema
//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

// Create/Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );