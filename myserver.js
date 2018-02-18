const http = require("http");
http.createServer((req,res)=>{
    
    var url = req.url;
    if(url=='/hello'){
        res.write("Hello User");
        res.end();
    }
    else
    if(url=='/welcome'){
        res.write("Welcome User");
        res.end();
    }
    
    else
    if(url=='/userjson'){
        var userObject = [{id:1001,name:'Ram',salary:49999},{id:1002,name:'Shyam',salary:39999},{id:1003,name:'Mike',salary:29999}];
    res.end(JSON.stringify(userObject));
    }
    if(url=='/index.html'){
        res.writeHead(200,{'content-type':'text/html'});
        const path = require("path");
        var fullPath = path.join(__dirname,"/public"+url);
        const fs = require("fs");
        var readStream = fs.createReadStream(fullPath);
        readStream.pipe(res);
    }
    else{
        res.write("Hi User");
        res.end();
    }
}).listen(process.env.PORT || 5000,()=>{
    console.log("Server Start...");
});
// const server = http.createServer(takeRequestGiveResponse);
// function takeRequestGiveResponse(request, response){
// response.write("Hello User");
// response.end();
// }
// server.listen(5000);


