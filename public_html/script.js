document.querySelectorAll('.MEOW .column img').forEach(img => {
            img.addEventListener('click', function() {
                const steckbrief = this.parentElement.querySelector('.STECKBRIEF');
                steckbrief.classList.toggle('SICHTBAR');
            });
        });

        function closePopup(button) {
            const steckbrief = button.parentElement;
            steckbrief.classList.remove('SICHTBAR');
        }