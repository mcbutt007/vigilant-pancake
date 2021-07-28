var doc = document.getElementById("background");
var color = ["black", "blue", "brown", "green"];
var i = 0;
function change() {
    doc.style.backgroundColor = color[i];
    i++;

    if(i > color.length - 1) {
        i = 0;
    }
}
ddEventListener('DOMContentLoaded', function() {
    setInterval(changeColor, 1000);
});
