
function addToPDF(url){
	var doc = new jsPDF();
	var img = new Image();
	img.src = url;
	doc.text("PDF de Espectros", 20, 10);
	doc.addImage(img, 'png', 10, 30, 100, 80);
	doc.save('Espectros.pdf');
}



function downloadImage(url) {
	fetch(url, {
		mode: 'no-cors',
	})
		.then(response => response.blob())
		.then(blob => {
			let blobUrl = window.URL.createObjectURL(blob);
			let a = document.createElement('a');
			a.download = "grafica_espectros.png";
			a.href = blobUrl;
			document.body.appendChild(a);
			a.click();
			a.remove();
		})
}



