var mongoose = require('mongoose');
var multer = require('multer');
var path = require('path');
var BLOGIMG_PATH = ('/images');
var blogSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    avatar : {
        type : String,
        required :true
    }
});

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.join(__dirname,"..",BLOGIMG_PATH));
    },
    filename : function(req, file, cb){
        cb(null, file.fieldname+'-'+Date.now());
    }
});

blogSchema.statics.uplodedAvatar = multer({
    storage : storage
}).single('avatar');
blogSchema.statics.avatarpath = BLOGIMG_PATH;

var student = mongoose.model('student', blogSchema);
module.exports = student;