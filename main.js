var i = 0;
var images = ["cartoon dad.jpg", "cartoon mom.jpg", "cartoon sister.png", "cartoon me.jpg"];
var names = ["Keith", "Karen", "Renha", "Kaylee"];

function update() {
    i++;
    var numberoffamilymembersinarray = 5;
    if (i > numberoffamilymembersinarray) {
        i = 0;
    }
    var updatedimage = images[i];
    var updatedname = names[i];
    document.getElementById("images").src = updatedimage;
    document.getElementById("names").innerHTML = updatedname;
}