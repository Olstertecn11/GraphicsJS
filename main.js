document.getElementById("btn_img").addEventListener("click", () => {
	var divGraph = document.getElementById("myDiv");
	Plotly.toImage('myDiv', { format: 'png', width: 800, height: 600 }).then((dataURL) => {
		downloadImage(dataURL);
	})
});

document.getElementById("btn_pdf").addEventListener("click", () => {
	var divGraph = document.getElementById("myDiv");
	Plotly.toImage('myDiv', { format: 'png', width: 800, height: 600 }).then((dataURL) => {
		addToPDF(dataURL);
	})
});


