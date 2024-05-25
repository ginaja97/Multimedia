document.querySelector('.STEIN1').addEventListener('click',SprechblaseAn);
		document.querySelector('.button2').addEventListener('click',SprechblaseAus);
		
		function SprechblaseAn() {
			document.querySelector('.STECKBRIEF').classList.add('SICHTBAR');
		}
		function SprechblaseAus() {
			document.querySelector('.STECKBRIEF').classList.remove('SICHTBAR');
		}