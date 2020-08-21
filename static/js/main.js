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
    // html のボタンが押された時実行される．
    connection.onopen = function(e) {
        console.log("通信が接続されました．");
    };
    //エラーが発生した場合
    connection.onerror = function(error) {
        console.log("エラー");
    };

    // // てすと
    // var t = document.getElementById("test");
    // t.innerHTML = event;

    // html 内の button が onClick されたとき，この関数が呼ばれる．
    var msg = document.getElementById("msg");
    connection.send(msg.value);
}

connection.onmessage = function (event) {
    // サーバーからメッセージを取得した時の動き
    // 以下てすと
    var newElement = document.createElement("p");
    // var newContent = document.createTextNode(event.data);
    newElement.innerHTML = event.data;
    // newElement.appendChild(newContent);

    var s = "すとりんぐ";
    console.log(s);

    console.log(event.data);

    var parentDiv = document.getElementById("testdiv");
    parentDiv.appendChild(newElement);
}