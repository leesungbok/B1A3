// 이메일, 닉네임, 휴대전화 중복검사
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('static'));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'java89',
    password : '1111',
    database : 'b1a3'
});

connection.connect();

joinCheck('/emailcheck', 'email');
joinCheck('/nknmcheck', 'nknm');
joinCheck('/phonecheck', 'phon');

function joinCheck(url, type) {
    app.get(url, function(req, res){
        res.setHeader('Access-Control-Allow-Origin', 'http://a.bitcamp.com:8080');
        res.writeHead(200, {'Content-Type': 'application/json'});
        connection.query(
            'select count(*) as count from memb where ' + type + '=?',
            [req.query[type]],
            function(err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.end('서버 실행중 오류 발생!');
                    return;
                }
                res.end(JSON.stringify(rows[0]));
            }
        );
    });
}

app.listen(8888, function() {
  console.log('서버 실행중...');
})