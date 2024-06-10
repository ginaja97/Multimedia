document.addEventListener("DOMContentLoaded", function() {
    updateLängenOptionen(); // Die Funktion wird aufgerufen, wenn das DOM geladen wurde
    updateFreistellerBild(); // Setzt das initiale Freistellerbild
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
	
    // Hinzufügen des Artikels zum Warenkorb
    addToCart(artikel);
	
	// Change the Warenkorb icon in the navigation
    document.getElementById('warenkorb').src = 'images/Icon_Warenkorb1.png';
	
}

// Funktion zum Anzeigen der Benachrichtigung
function addToCart(artikel) {
    console.log("Artikel dem Warenkorb hinzugefügt:", artikel);
    
    // Get the notification box element
    const notificationBox = document.getElementById('notificationBox');
    
    // Set the message
    notificationBox.textContent = "Artikel wurde dem Warenkorb hinzugefügt!";
    
    // Display the box
    notificationBox.style.display = 'block';
    
    // Hide the box after 5 seconds
    setTimeout(() => {
        notificationBox.style.display = 'none';
    }, 5000);
	// Funktion zum Ändern des Warenkorb-Icons
	function updateWarenkorbIcon() {
    	var warenkorbIcon = document.getElementById('warenkorb');
    	warenkorbIcon.src = 'images/Icon_Warenkorb1.png';
	}
}

// Funktion zum Aktualisieren der Edelstein-Vorschau
function updateSteinVorschau() {
    var stein = document.getElementById('stein').value;
    var edelsteinBild = document.getElementById('edelsteinBild');

    // Setzen des Bildes basierend auf der Auswahl
    edelsteinBild.src = 'images/' + stein + '.png';
    edelsteinBild.style.display = 'block'; // Bild anzeigen

    // Position des Edelsteins anpassen (Beispielwerte)
    var positionen = {
        'aquamarinkreis': {top: '890px',left: '1141px'},
        'smaragdkreis': {top: '890px',left: '1141px'},
        'topaskreis': {top: '890px',left: '1141px'},
        'mondsteinkreis': {top: '890px',left: '1141px'},
        'diamantkreis': {top: '890px',left: '1141px'},
        'saphirkreis': {top: '890px',left: '1141px'},
        'opalkreis': {top: '890px',left: '1141px'},
        'peridotkreis': {top: '890px',left: '1141px'},
        'tansanitkreis': {top: '890px',left: '1141px'},
        'rubinkreis': {top: '890px',left: '1141px'},
        'granatkreis': {top: '890px',left: '1141px'},
        'amethystkreis': {top: '890px',left: '1141px'}
    };

    var position = positionen[stein];
    edelsteinBild.style.top = position.top;
    edelsteinBild.style.left = position.left;

    // Animation hinzufügen
    edelsteinBild.style.transform = 'scale(1.2)';
    setTimeout(function() {
        edelsteinBild.style.transform = 'scale(1)';
    }, 500);
}

// Funktion zum Aktualisieren des Freistellerbildes basierend auf Produkttyp und Material
function updateFreistellerBild() {
    var produktTyp = document.getElementById('produktTyp').value;
    var material = document.getElementById('material').value;
    var freistellerBild = document.getElementById('freistellerBild');

    freistellerBild.src = 'images/' + produktTyp + '-' + material + '.png';
}
	// Erstellung mit Hilfe von Inhalten aus Tutorium/Vorlesungsmaterialen, https://www.w3schools.com/ und https://chatgpt.com/
