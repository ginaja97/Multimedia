document.addEventListener('DOMContentLoaded', function() {
    var aquamarin = document.getElementById('AQUAMARIN');
    var aquamarinPopup = document.getElementById('aquamarin-popup');
    
    aquamarin.addEventListener('click', function() {
        // Toggle visibility
        if (aquamarinPopup.style.display === 'none' || aquamarinPopup.style.display === '') {
            aquamarinPopup.style.display = 'block';
        } else {
            aquamarinPopup.style.display = 'none';
        }
    });

    // Schließen das Popup, wenn außerhalb davon geklickt wird:
    window.addEventListener('click', function(event) {
        if (event.target !== aquamarin && event.target !== aquamarinPopup) {
            aquamarinPopup.style.display = 'none';
        }
    });
});
