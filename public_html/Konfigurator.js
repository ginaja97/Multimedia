document.addEventListener("DOMContentLoaded", function() {
    updateLängenOptionen(); // Die Funktion wird aufgerufen, wenn das DOM geladen wurde
});

// Funktion zum Aktualisieren der Längenoptionen basierend auf dem ausgewählten Produkttyp
function updateLängenOptionen() {
    var produktTyp = document.getElementById('produktTyp').value;
    var laengeOptionen = document.getElementById('laenge');

    laengeOptionen.innerHTML = ''; // Reset der Optionen

    if (produktTyp === 'kette') {
        addOption(laengeOptionen, '40', '40 cm');
        addOption(laengeOptionen, '50', '50 cm');
        addOption(laengeOptionen, '60', '60 cm');
    } else if (produktTyp === 'armband') {
        addOption(laengeOptionen, '16', '16 cm');
        addOption(laengeOptionen, '18', '18 cm');
        addOption(laengeOptionen, '20', '20 cm');
    }
}

// Funktion zum Hinzufügen einer Option zu einem Select-Element
function addOption(selectElement, value, text) {
    var option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
}

// Funktion zum Berechnen des Preises basierend auf den ausgewählten Optionen
function berechnePreis() {
    var produktTyp = document.getElementById('produktTyp').value;
    var material = document.getElementById('material').value;
    var laenge = document.getElementById('laenge').value;
    var stein = document.getElementById('stein').value;

    var preis = 0;

    // Basispreis basierend auf dem Produkttyp
    if (produktTyp === 'kette') {
        preis += 50;
    } else if (produktTyp === 'armband') {
        preis += 40;
    }

    // Aufpreis für Material
    if (material === 'gold') {
        preis += 100;
    }

    // Aufpreis für Länge
    if (produktTyp === 'kette') {
        preis += (laenge - 40) * 2;
    } else if (produktTyp === 'armband') {
        preis += (laenge - 16) * 3;
    }

    // Aufpreis für bestimmte Edelsteine
    if (stein === 'diamant' || stein === 'saphir' || stein === 'rubin') {
        preis += 200;
    } else if (stein === 'topas' || stein === 'granat') {
        preis += 50;
    }

    // Anzeige des berechneten Preises
    document.getElementById('preisAnzeige').textContent = 'Gesamtpreis: ' + preis + ' Euro';
}

// Funktion zum Hinzufügen des konfigurierten Artikels zum Warenkorb
function zumWarenkorbHinzufügen() {
    var produktTyp = document.getElementById('produktTyp').value;
    var material = document.getElementById('material').value;
    var laenge = document.getElementById('laenge').value;
    var stein = document.getElementById('stein').value;
    var preis = parseFloat(document.getElementById('preisAnzeige').textContent.split(":")[1]);

    var artikel = {
        produktTyp: produktTyp,
        material: material,
        laenge: laenge,
        stein: stein,
        preis: preis
    };

    // Hinzufügen des Artikels zum Warenkorb (hier könnte die Logik stehen, um den Artikel tatsächlich zum Warenkorb hinzuzufügen)
    console.log("Artikel dem Warenkorb hinzugefügt:", artikel);
    alert("Artikel wurde dem Warenkorb hinzugefügt!");
}

// Funktion zum Aktualisieren der Edelstein-Vorschau
function updateSteinVorschau() {
    var stein = document.getElementById('stein').value;
    var steinVorschau = document.getElementById('steinVorschau');

    // Setzen des Bildes basierend auf der Auswahl
    steinVorschau.src = 'images/' + stein + '.png';
    steinVorschau.style.display = 'block'; // Bild anzeigen
}
