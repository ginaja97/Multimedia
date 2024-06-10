function evaluateQuiz(event) {
  event.preventDefault();  // Verhindert das Standardverhalten des Formulars

  var answers = {};
  var allQuestionsAnswered = true;
  var points = {
    widder: 0,
    stier: 0,
    zwillinge: 0,
    krebs: 0,
    loewe: 0,
    jungfrau: 0,
    waage: 0,
    skorpion: 0,
    schuetze: 0,
    steinbock: 0,
    wassermann: 0,
    fische: 0
  };

  // Funktion zur Zuweisung von Punkten
  function assignPoints(value) {
    points[value] += 1;
  }

  // Frage 1
  var question1 = document.getElementById('question1');
  var selectedSign = question1.querySelector('input[type="radio"]:checked');
  if (selectedSign) {
    answers["Sternzeichen"] = selectedSign.value;
    assignPoints(selectedSign.value);
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 2
  var question2 = document.getElementById('question2');
  var selectedCharacter = question2.querySelector('input[type="radio"]:checked');
  if (selectedCharacter) {
    answers["Charakter"] = selectedCharacter.value;
    switch(selectedCharacter.value) {
      case "abenteuerlustig":
        assignPoints("widder");
        assignPoints("loewe");
        assignPoints("schuetze");
        break;
      case "bodenstaendig":
        assignPoints("stier");
        assignPoints("jungfrau");
        assignPoints("steinbock");
        break;
      case "kommunikativ":
        assignPoints("zwillinge");
        assignPoints("waage");
        assignPoints("wassermann");
        break;
    }
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 3
  var question3 = document.getElementById('question3');
  var selectedColor = question3.querySelector('input[type="radio"]:checked');
  if (selectedColor) {
    answers["Farbe"] = selectedColor.value;
    switch(selectedColor.value) {
      case "rot":
        assignPoints("widder");
        assignPoints("skorpion");
        break;
      case "gruen":
        assignPoints("stier");
        assignPoints("jungfrau");
        break;
      case "blau":
        assignPoints("zwillinge");
        assignPoints("waage");
        break;
      case "violett":
        assignPoints("fische");
        assignPoints("schuetze");
        break;
      case "gelb":
        assignPoints("loewe");
        assignPoints("steinbock");
        break;
    }
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 4
  var question4 = document.getElementById('question4');
  var selectedTrait = question4.querySelector('input[type="radio"]:checked');
  if (selectedTrait) {
    answers["Eigenschaft"] = selectedTrait.value;
    switch(selectedTrait.value) {
      case "mut":
        assignPoints("widder");
        assignPoints("loewe");
        break;
      case "stabilitaet":
        assignPoints("stier");
        assignPoints("steinbock");
        break;
      case "intellekt":
        assignPoints("zwillinge");
        assignPoints("wassermann");
        break;
    }
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 5
  var question5 = document.getElementById('question5');
  var selectedActivity = question5.querySelector('input[type="radio"]:checked');
  if (selectedActivity) {
    answers["Aktivität"] = selectedActivity.value;
    switch(selectedActivity.value) {
      case "wandern":
        assignPoints("steinbock");
        assignPoints("schuetze");
        break;
      case "gartenarbeit":
        assignPoints("stier");
        assignPoints("jungfrau");
        break;
      case "lesen":
        assignPoints("zwillinge");
        assignPoints("fische");
        break;
    }
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 6
  var question6 = document.getElementById('question6');
  var selectedLandscape = question6.querySelector('input[type="radio"]:checked');
  if (selectedLandscape) {
    answers["Landschaft"] = selectedLandscape.value;
    switch(selectedLandscape.value) {
      case "meereskueste":
        assignPoints("krebs");
        assignPoints("fische");
        break;
      case "berglandschaften":
        assignPoints("steinbock");
        assignPoints("schuetze");
        break;
      case "waelder":
        assignPoints("jungfrau");
        assignPoints("stier");
        break;
      case "wuesten":
        assignPoints("loewe");
        assignPoints("widder");
        break;
    }
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 7
  var question7 = document.getElementById('question7');
  var selectedSeason = question7.querySelector('input[type="radio"]:checked');
  if (selectedSeason) {
    answers["Jahreszeit"] = selectedSeason.value;
    switch(selectedSeason.value) {
      case "fruehling":
        assignPoints("stier");
        assignPoints("widder");
        break;
      case "sommer":
        assignPoints("loewe");
        assignPoints("krebs");
        break;
      case "herbst":
        assignPoints("waage");
        assignPoints("skorpion");
        break;
      case "winter":
        assignPoints("steinbock");
        assignPoints("schuetze");
        break;
    }
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 8
  var question8 = document.getElementById('question8');
  var selectedMusic = question8.querySelector('input[type="radio"]:checked');
  if (selectedMusic) {
    answers["Musik"] = selectedMusic.value;
    switch(selectedMusic.value) {
      case "rock":
        assignPoints("widder");
        assignPoints("skorpion");
        break;
      case "klassik":
        assignPoints("waage");
        assignPoints("fische");
        break;
      case "pop":
        assignPoints("loewe");
        assignPoints("zwillinge");
        break;
    }
  } else {
    allQuestionsAnswered = false;
  }

  const notificationBox = document.getElementById('notificationBox');

  if (allQuestionsAnswered) {
    var maxPoints = 0;
    var selectedGemstone = "";

    // Ermittlung des Sternzeichens mit den meisten Punkten
    for (var sign in points) {
      if (points[sign] > maxPoints) {
        maxPoints = points[sign];
        selectedGemstone = sign;
      }
    }

    var gemstone = "";
    var meaning = "";
    switch(selectedGemstone) {
      case "widder":
        gemstone = "Aquamarin";
        meaning = "Mut und Reinheit";
        break;
      case "stier":
        gemstone = "Smaragd";
        meaning = "Hoffnung und Prosperität";
        break;
      case "zwillinge":
        gemstone = "Topas";
        meaning = "Freundschaft und Hoffnung";
        break;
      case "krebs":
        gemstone = "Mondstein";
        meaning = "Frieden und Ruhe";
        break;
      case "loewe":
        gemstone = "Diamant";
        meaning = "Liebe und Treue";
        break;
      case "jungfrau":
        gemstone = "Saphir";
        meaning = "Hingabe und Freude";
        break;
      case "waage":
        gemstone = "Opal";
        meaning = "Wahrhaftigkeit und Sanftmut";
        break;
      case "skorpion":
        gemstone = "Peridot";
        meaning = "Prosperität und Ausgeglichenheit";
        break;
      case "schuetze":
        gemstone = "Tansanit";
        meaning = "Vorstellungskraft und Regeneration";
        break;
      case "steinbock":
        gemstone = "Rubin";
        meaning = "Schönheit und Leidenschaft";
        break;
      case "wassermann":
        gemstone = "Granat";
        meaning = "Loyalität und Entschlossenheit";
        break;
      case "fische":
        gemstone = "Amethyst";
        meaning = "Ausgeglichenheit und Ruhe";
        break;
      default:
        gemstone = "Nicht definiert";
        meaning = "Nicht definiert";
        break;
    }

    // Ausgabe der Auswertung
    notificationBox.className = 'success';
    notificationBox.textContent = "Dein Edelstein ist der " + gemstone + ". Er steht für " + meaning + ".";
  } else {
    notificationBox.className = 'error';
    notificationBox.textContent = "Bitte beantworte alle Fragen.";
  }

  notificationBox.style.display = 'block';

  // Hide the box after 5 seconds
  setTimeout(() => {
    notificationBox.style.display = 'none';
  }, 10000);
}
	// Erstellung mit Hilfe von Inhalten aus Tutorium/Vorlesungsmaterialen, https://www.w3schools.com/ und https://chatgpt.com/
