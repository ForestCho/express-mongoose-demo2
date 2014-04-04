var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
      name: String
    , password: String
});


UserSchema.statics.findbyname = function(name,callback){
	this.find({name:name},callback);
}

UserSchema.statics.removebyname = function(name,callback){
	this.remove({name:name},callback)
}

UserSchema.statics.updatebyname = function(name,objNew,options,callback){
	this.update({name:name},objNew,options,callback);
}

var User = mongoose.model('User',UserSchema);
module.exports = User;

