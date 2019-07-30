var express=require('express');
var app=express();

app.use(express.json()) // this use function allow to access body's content to us.
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

app.put('/put/:id',(req,res)=>
{    
    
    console.log("For Update ...");
    
    console.log(req.body);
    
    //res.json({requestBody: req.body})
    res.send("PUT request");

});


var server=app.listen(3000,function() {console.log("server listening ...");
});