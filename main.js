var express=require('express');
var app=express();

app.use(express.json())
app.get('/api',function(req,res)
{    
    console.log(req.url.toString());
    
    res.send("GET request");
});

app.post('/api/:id',(req,res)=>
{    
    
    console.log(req.url.toString());   
    console.log(JSON.stringify(req.params.id)); 

    console.log(req.body);
    
    //res.json({requestBody: req.body})
    res.send("POST request");

});

var server=app.listen(3000,function() {console.log("server listening ...");
});