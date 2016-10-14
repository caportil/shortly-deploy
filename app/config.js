// var path = require('path');
// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shortlydb');
var db = mongoose.connection;
// var db = mongoose.createConnection('mongodb://localhost/shortlydb');

module.exports = db;

// console.log(typeof db);
// db.on('error', console.error.bind(console, 'connection error: error in config js'));
// db.once('open', function() {
//   // Create your schemas and models here
//   // userSchema = new Schema({
//   //   id: ObjectId,
//   //   username: String,
//   //   password: String,
//   //   timestamps: new Date()
//   // });

//   // linkSchema = new Schema({
//   //   url: String,
//   //   baseUrl: String,
//   //   code: String,
//   //   title: String,
//   //   visits: Number,
//   //   timestamps: new Date(),
//   //   userid: Number
//   // });

// });


// module.exports.mongoose = mongoose;
// module.exports.db = db;
// module.exports.userSchema = userSchema;
// module.exports.linkSchema = linkSchema;

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//       // link.string('userid', 255);
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });










// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }


//   }
// });

// });

