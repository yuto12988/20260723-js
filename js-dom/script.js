// h1  要素を取得
const title = document.querySelector("#title");
console.log(title);
//h1のテキストを書き換え
title.textContent = "javascriptで変更しました"
console.log(title);

//p要素を取得
const text = document.querySelector(".text");
console.log(text);

//pのテキストを書き換え
text.textContent = "この文章も変更されました";