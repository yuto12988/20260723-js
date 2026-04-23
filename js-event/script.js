const button = document.querySelector("#btn");
const title = document.querySelector("#title");
const text = document.querySelector("#text");

//テキスト変更
button.addEventListener("click", function() {
    title.textContent = "クリックされました";
});

//色変更
button.addEventListener("click", function() {
    title.style.color = "red";
});

//非表示
button.addEventListener("click" , function() {
    text.style.display = "none";
});