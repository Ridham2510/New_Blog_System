const express = require('express');
const route = express.Router();
const postController = require('../controller/postController');


route.get('/',function(req,res){
    res.render('add_blog');
});

route.post('/insertData', postController.insertData);
route.get('/viewData', postController.viewData);
route.get('/viewMore/:id', postController.viewMore);


module.exports = route;