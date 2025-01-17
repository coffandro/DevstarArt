const DEVSTARDATA = "https://raw.githubusercontent.com/coffandro/DevstarArtData/refs/heads/master/data.json";

function onLoad() {
    $.getJSON(DEVSTARDATA, function (json) {
        var AboutText = document.getElementById("AboutText");
        AboutText.children[0].innerHTML = json["AboutMeText"];
        var AboutImg = document.getElementById("AboutImg");
        AboutImg.src = json["AboutMeImage"];
    });
}
window.onload = onLoad;