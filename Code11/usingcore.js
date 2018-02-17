const fs = require("fs");
const path = require("path");
console.log("Reading FILE>>>>>>>");
console.log("DIR ",__dirname);
console.log("FILE ",__filename);
var newPath = path.normalize(__dirname+"/..");
var fullPath  = path.join(newPath,"/TestBower/views/aboutus.html");
console.log("New Path is ",newPath);
console.log("New Path is ",fullPath);
var readableStream = fs.createReadStream(fullPath,{ highWaterMark: 20 });
// var writeableStream = fs.createWriteStream('test.txt');
// readableStream.on("data",(chunk)=>{
//     writeableStream.write(chunk);
// });
// readableStream.on("end",()=>{
//     console.log("Data End...");
// });
console.log("CHUNK.......");
readableStream.pipe(process.stdout);
//readableStream.pipe(writeableStream);
/*fs.readFile(fullPath,{encoding:'UTF-8'},function(error,content){
if(error){
    console.log("Can't Read this File...");
}
else{
    console.log("Data is "+content);
}
});*/

for(let i = 1;i<=5; i++){
    console.log("Doing some Logic",i);
}