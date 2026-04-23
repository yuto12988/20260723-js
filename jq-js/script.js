const button = $("#btn");
// console.log(button);

const title = $("#title");
const text = $("#text");

//イベントをまとめて追加
button.click(function() {
    title.text("クリックされました");
    title.css("color", "red");
    text.hide();
});