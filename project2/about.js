/*
    Aileen Shi
    CPSC 3750
    8/3/24
    About js
*/
// Back button
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("back-to-home");

    button.addEventListener("click", function (event) {
        window.location.assign("https://aileenshi.com/project2/collection.html");
    })
});
