var redLine = {
	x: [1, 2, 3, 4],
	y: [7, 6, 5, 4],
	type: 'scatter',
	mode: "lines"
};

var circle1 = {
	x: [2],
	y: [6],
	mode: 'markers',
	type: 'scatter'
};

var circle2 = {
	x: [6],
	y: [6],
	mode: 'markers',
	type: 'scatter'
};

var blueLine = {
	x: [4, 5, 6, 7, 8],
	y: [4, 5, 6, 7, 8],
	type: 'scatter',
	mode: "lines"
};

var greenLine = {
	x: [1.5, 2, 2.5, 3],
	y: [4.5, 5, 5.5, 4],
	type: 'scatter',
	mode: "lines",
	line: {
		dash: 'dot',
		width: 2
	}
};

var data = [redLine, blueLine, circle1, greenLine, circle2];

var layout = {
	title: 'Espectros de diseño',
	xaxis: {
		type: 'log',
		autorange: true,
		showgrid: false,
		showline: true,
		title: 'Periodo T[s]'
	},
	yaxis: {
		type: 'log',
		autorange: true,
		showgrid: false,
		showline: true,
		title: 'Aceleración [g]'
	},
	colorway: ['ff0000', '#0000ff', '#000000', '#008000', '#FF4500'],
	plot_bgcolor: "rgba(0, 0, 0, 0)",
	paper_bgcolor: "rgba(0, 0, 0, 0)"
};

Plotly.newPlot('myDiv', data, layout);


