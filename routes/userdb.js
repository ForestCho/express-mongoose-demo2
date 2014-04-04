
/*
 * GET home page.
 */

var User = require('../models/user');

//add data like this
exports.add=function(req,res){
var user = new User({
    name:'forest',
    password:'123456'
});
user.save(function (err, user) {
        if(!err) {
            console.log(user);
            res.redirect('/show');
        }
    });
console.log(user);
};

//show all data
exports.show=function(req,res){
User.find(function(err,doc){
console.log(doc);
res.render('show',{title:'welcome to show page',entry:doc});
});
};

//show all data selected by name
exports.showbyname=function(req,res){
User.findbyname('forest',function(err,doc){
res.render('showbyname',{title:'welcome to showbyname page',entry:doc});
});
};

//delete data by name
exports.removebyname=function(req,res){
User.removebyname('forest',function(error){
if(error){
        res.render('removebyname',{title:'welcome to removebyname page',tips:"remove unsuccessfully"});
}else{

        res.render('removebyname',{title:'welcome to removebyname page',tips:'removee successfully'});
}
});
};

//update data
exports.updatebyname=function(req,res){
var update     = {$set : {password : '273333'}};
var options    = {upsert : true};

User.updatebyname('forest',update,options,function(error){
if(error){
        res.render('updatebyname',{title:'welcome to removebyname page',tips:"update unsuccessfully"});
}else{

        res.render('updatebyname',{title:'welcome to removebyname page',tips:'update successfully'});
}
});
};
