var db = require('../config');
var mongoose = require('mongoose');
var crypto = require('crypto');
var Promise = require('bluebird');
var Schema = mongoose.Schema;

var linkSchema = Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  // timestamps: new Date(),
  userid: Number
});

var Link = mongoose.model('Link', linkSchema);

linkSchema.pre('save', function(callback) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  callback();
});
// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
// //     });
//   }
// });

module.exports = Link;
