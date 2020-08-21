//WebSocket接続
var connection = new WebSocket("ws://localhost:8888/pipe");

// // 接続が開いたときのイベント
// connection.addEventListener('open', function (event) {
//     socket.send('Hello Server!');
// });

// // メッセージの待ち受け
// connection.addEventListener('message', function (event) {
//     console.log('Message from server ', event.data);
// });

function send_message() {
    var msg = document.getElementById("msg");
    // html のボタンが押された時実行される．
    connection.onopen = function(e) {
        console.log("通信が接続されました．");
    };
    //エラーが発生した場合
    connection.onerror = function(error) {
        console.log("エラー");
    };
    connection.send("from browser.");
    connection.send(msg.value);
}