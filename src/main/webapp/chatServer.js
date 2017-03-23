"use strict";
process.title = 'node-chat';
var webSocketsServerPort = 1337;
var mysql = require('mysql');
var webSocketServer = require('websocket').server;
var http = require('http');

var history = [ ];
var clients = [ ];

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

var server = http.createServer(function(request, response) {
});
server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});

var wsServer = new webSocketServer({
    //  Http 에  웹 소켓이 접속
    httpServer: server
});

// 서버에 접속하는 사람 찾기
wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');
    var connection = request.accept(null, request.origin); 
    var index = clients.push(connection) - 1;
    var userName = false;
    console.log((new Date()) + ' Connection accepted.');
    
    if (history.length > 0) {
        connection.sendUTF(JSON.stringify( { type: 'history', data: history} ));
    }
    // 메시지 받기
    connection.on('message', function(message) {
    	var b1 = JSON.parse(message.utf8Data);
    	console.log(b1.myName);
    	console.log(b1.msg);
        if (message.type === 'utf8') { 
        	userName = b1.myName;
	        console.log((new Date()) + ' Received Message from '
	                    + userName + ': ' + b1.msg);
	        
	        var obj = {
	            time: (new Date()).getTime(),
	            text: htmlEntities(b1.msg),
	            author: userName
	        };
	    	
	        console.log(obj);
	        history.push(obj);
	        history = history.slice(-100);
	        // 메시지 보내는것
	        var json = JSON.stringify({ type:'message', data: obj });
	        for (var i=0; i < clients.length; i++) {
	            clients[i].sendUTF(json);
	        }
        
        }
    });
    // 연결을 끊을때
    connection.on('close', function(connection) {
        if (userName !== false) {
            console.log((new Date()) + " Peer "
                + connection.remoteAddress + " :userName" + userName +  " disconnected.");
            // remove user from the list of connected clients
            clients.splice(index, 1);
        }
    });
});

