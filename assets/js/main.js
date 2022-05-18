bundeslandInfo = document.getElementById('bundeslandInfo');
Ergebnis = document.getElementById('bundeslandInfoErgebnis');

function check() {
    console.log('runs');
    switch (bundeslandInfo.value) {
        case "Baden-Württemberg":
            Ergebnis.innerHTML = 'hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt';
            break;
        case "Bayern":
            Ergebnis.innerHTML = 'Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt';
            break;
        case "Berlin":
            Ergebnis.innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Brandenburg":
            Ergebnis.innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
            break;
        case "Bremen":
            Ergebnis.innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "Hamburg":
            Ergebnis.innerHTML = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
            break;
        case "Hessen":
            Ergebnis.innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        case "Mecklenburg-Vorpommern":
            Ergebnis.innerHTML = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
            break;
        case "Niedersachsen":
            Ergebnis.innerHTML = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
            break;
        case "Nordrhein-Westfalen":
            Ergebnis.innerHTML = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
            break;
        case "Rheinland-Pfalz":
            Ergebnis.innerHTML = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
        case "Saarland":
            Ergebnis.innerHTML = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
            break;
        case "Sachsen":
            Ergebnis.innerHTML = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
            break;
        case "Sachsen-Anhalt":
            Ergebnis.innerHTML = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";;
            break;
        case "Schleswig-Holstein":
            Ergebnis.innerHTML = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
            break;
        case "Thürigen":
            Ergebnis.innerHTML = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
            break;
        default:
            Ergebnis.innerHTML = 'Ein solches Bundesland gibt es in Deutschland nicht.';

    }
}