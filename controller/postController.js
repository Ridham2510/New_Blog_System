var blog = require('../models/blog');

module.exports.insertData = function(req,res){
    try
    {
        blog.uplodedAvatar(req,res,async function(){
            var imgpath = '';
            if(req.file)
            {
                imgpath = blog.avatarpath+"/"+req.file.filename;
            }
            var data = await blog.create({
                title : req.body.title,
                category : req.body.category,
                name : req.body.name,
                date : req.body.date,
                description : req.body.description,
                avatar : imgpath
            });
            if(data)
            {
                return res.redirect('/viewData');
            }
            else{
                console.log("record not inserted.");
                return res.redirect('/insertData');
            }
        });
    }
    catch(err)
    {
        console.log(err);
        return res.redirect('/insertData');
    }
}

module.exports.viewData = async function(req,res){
    try
    {
        var data = await blog.find({});

        if(data)
        {
            res.render('view', {
                record : data
            })
        }
        else{
            console.log("err");
            return res.redirect('/viewData');
        }
    }
    catch(err)
    {
        console.log(err);
        return res.redirect('/viewData');
    }
}

module.exports.viewMore = async function(req,res){
    try
    {
        var data = await blog.findById(req.params.id);
        
        if(data)
        {
            res.render('single_blog', {
                record : data
            });
        }
        else{
            console.log("err");
            return res.redirect('/viewData');
        }
    }
    catch(err)
    {
        console.log(err);
        return res.redirect('/viewData');
    }
}
