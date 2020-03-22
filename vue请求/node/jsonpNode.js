const http = require('http');
const urlModle = require('url'); 
const server = http.createServer();

server.on('request',function(req,res){
    const {pathname: url,query} = urlModle.parse(req.url,true);
    const obj = {
        name: "名",
        age: "23",
        sex: '男',
    }
     if(url === '/jsonp'){
         const scriptStr = `${query.callback}(${JSON.stringify(obj)})`;
        res.end(scriptStr); 
        console.log("/jsonp");
    }else{
        res.end(404);
    }
});
console.log('Server running at http://127.0.0.1:3000/');
server.listen('3000',function(){
    console.log(1);
});