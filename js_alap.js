document.write("Külön fájlból köszöntelek!<br>");
const DB = 50
var veletlentomb = new Array();

function feltolt() {
    for (var i = 0; i < DB; i++) {
        var vel = Math.floor(Math.random() * 100) + 1;
        veletlentomb[i] = vel;
    }
}

function tomb_kiir() {
    if (tomb_ellenorzes()) {
        var szoveg = "";
        for (var i = 0; i < veletlentomb.length; i++) {
            szoveg += veletlentomb[i] + " ";
            if (i % 5 == 4) {
                szoveg += "\r\n";
            }
        }
        szoveg_kiir(szoveg);
    }
}

function szamol() {
    if (tomb_ellenorzes()) {
        let osszeg = 0;
        for (var i = 0; i < veletlentomb.length; i++) {
            osszeg += veletlentomb[i];
        }
        szoveg_kiir(`A számok összege ${osszeg}.`);
    }
}

function paros_db() {
    if (tomb_ellenorzes()) {
        let parosak = 0;
        for (var i = 0; i < veletlentomb.length; i++) {
            if (veletlentomb[i] % 2 == 0)
                parosak++;
        }
        szoveg_kiir(`A párosak száma: ${parosak}.`)
    }
}

function van_egyes() {
    if (tomb_ellenorzes()) {
        let harommal = 0;
        let i = 0;
        while (i < veletlentomb.length && veletlentomb[i] != 1) {
            i++;
        }
        if (i < veletlentomb.length) {
            szoveg_kiir("Van 1-es szám a tömbben.");
        } else {
            szoveg_kiir("Nincs 1-es szám a tömbben.");
        }
    }
}

function legnagyobb_szam() {
    if (tomb_ellenorzes()) {
        let idx = 0;
        for (var i = 0; i < veletlentomb.length; i++) {
            if (veletlentomb[idx] < veletlentomb[i]) {
                idx = i
            }
        }
        szoveg_kiir(`A legnagyobb szám: ${veletlentomb[idx]}.`)
    }
}


function tomb_ellenorzes() {
    if (!veletlentomb.length) {
        szoveg_kiir("Előbb fel kell tölteni a tömböt. Kattints a \"Feltölt\" gombra!");
        return false;
    }
    return true;
}

function szoveg_kiir(szoveg) {
    alert(szoveg);
}
