window.addEventListener('load', ()=>{
	const form = document.querySelector('.form');
	const input = document.querySelector('.input');

	form.addEventListener('submit', (event)=>{
		event.preventDefault();

		if(input.value.length != 0){
			const f = math.parse(`${input.value}`);
			const derivative = math.derivative(f, 'x');

			console.log(derivative.toString());

			const xValues = math.range(-10, 10, 0.5).toArray();
			const yValues = xValues.map(function (x) {
				return derivative.evaluate({x: x});
			});

			const chart = new Chart(document.querySelector('.chart'), {
				type: 'line',
				data: {
					labels: xValues,
					datasets: [{
						label: `Derivada de (${input.value})`,
						data: yValues,
						borderColor: 'rgb(255, 99, 132)',
						fill: false
					}]
				},
				options: {
					scales: {
						xAxes: [{
							type: 'linear',
							position: 'bottom'
						}]
					}
				}
			})
		}
	})
})