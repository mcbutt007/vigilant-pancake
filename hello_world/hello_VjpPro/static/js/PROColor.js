document.addEventListener('DOMContentLoaded', function() {
    setInterval(
    function () {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#"+randomColor;
        },1000);
});
