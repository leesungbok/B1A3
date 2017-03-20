if ('WebSocket' in window) {  
    var oSocket = new WebSocket("ws://localhost:80");

    oSocket.onmessage = function (e) { 
        console.log(e.data); 
    };

    oSocket.onopen = function (e) {
        console.log("open");
    };

    oSocket.onclose = function (e) {
        console.log("close");
    };

    oSocket.send("message");
    oSocket.close();
}