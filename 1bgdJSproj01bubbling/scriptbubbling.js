let button = document.getElementById("ring-button");
const tb = document.getElementById("toolbat");

    button.addEventListener("click", function (event) {
 // document.getElementById("ring-button").innerHTML +=" button clicked";
    });
    toolbar.addEventListener("click", function (event) {
    document.getElementById("toolbar").innerHTML += "toolbar clicked";
    });
    document.addEventListener("click", function (event) {
        console.log("document clicked");
    });