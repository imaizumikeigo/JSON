// ここを追加
console.log("読み込みテスト");
// 「done」が最初に出力される

fetch("test.txt")
  .then((data) => data.text())
  .then((res) => console.log(res));
// 「テキストデータです」と出力される