document.write("Külön fájlból köszöntelek!<br>");
var veletlentomb = new Array();

function feltolt() {
    for (var i = 0; i < 50; i++) {
        var vel = Math.floor(Math.random() * 100) + 1;
        veletlentomb[i] = vel;
    }
}

function kiir() {
    if (tomb_ellenorzes()) {
        var szoveg = "";
        for (var i = 0; i < veletlentomb.length; i++) {
            szoveg += veletlentomb[i] + " ";
            if (i % 5 == 4) {
                szoveg += "\r\n";
            }
        }
        alert(szoveg);
    }
}

