const http = require('http');
const server = http.createServer(function(req,res){
    var obj = { name: 'Karn', age: 28, city: 'Bangkok' }

    if(req.url === '/'){
        res.write('You are at home page.');
        res.end();
    }
    if(req.url === '/contact'){
        res.write(JSON.stringify(obj));
        res.end();
    }
});
server.addListener('connection',function(socket){
    console.log('Client Connected');
});

server.listen(3000);
console.log('Listening from port 3000');