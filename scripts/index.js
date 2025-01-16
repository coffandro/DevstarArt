const DEVSTARDATA = "https://raw.githubusercontent.com/coffandro/DevstarArtData/refs/heads/master/data.json";

function onLoad() {
    $.getJSON(DEVSTARDATA, function (json) {
        var Status = document.getElementById("Status");
        Status.children[0].innerHTML = json["Status"];
    });
}
window.onload = onLoad;