function evaluateQuiz() {
  var answers = {};
  var allQuestionsAnswered = true; // Initialisierung hier

  // Frage 1
  var question1 = document.getElementById('question1');
  var selectedSign = question1.querySelector('input[type="radio"]:checked');
  if (selectedSign) {
    answers["Sternzeichen"] = selectedSign.value;
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 2
  var question2 = document.getElementById('question2');
  var selectedCharacter = question2.querySelector('input[type="radio"]:checked');
  if (selectedCharacter) {
    answers["Charkter"] = selectedCharacter.value;
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 3
  var question3 = document.getElementById('question3');
  var selectedColor = question3.querySelector('input[type="radio"]:checked');
  if (selectedColor) {
    answers["Farbe"] = selectedColor.value;
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 4
  var question4 = document.getElementById('question4');
  var selectedTrait = question4.querySelector('input[type="radio"]:checked');
  if (selectedTrait) {
    answers["Eigenschaft"] = selectedTrait.value;
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 5
  var question5 = document.getElementById('question5');
  var selectedActivity = question5.querySelector('input[type="radio"]:checked');
  if (selectedActivity) {
    answers["Aktivität"] = selectedActivity.value;
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 6
  var question6 = document.getElementById('question6');
  var selectedLandscape = question6.querySelector('input[type="radio"]:checked');
  if (selectedLandscape) {
    answers["Landschaft"] = selectedLandscape.value;
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 7
  var question7 = document.getElementById('question7');
  var selectedSeason = question7.querySelector('input[type="radio"]:checked');
  if (selectedSeason) {
    answers["Jahreszeit"] = selectedSeason.value;
  } else {
    allQuestionsAnswered = false;
  }

  // Frage 8
  var question8 = document.getElementById('question8');
  var selectedMusic = question8.querySelector('input[type="radio"]:checked');
  if (selectedMusic) {
    answers["Musik"] = selectedMusic.value;
  } else {
    allQuestionsAnswered = false;
  }

  if (allQuestionsAnswered) {
      var gemstone = "";
      var meaning = "";
      switch(selectedSign.value) {
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
    alert("Dein Edelstein ist der " + gemstone + ".\nEr steht für " + meaning + ".");
  } else {
    alert("Bitte beantworte alle Fragen.");
  }
}