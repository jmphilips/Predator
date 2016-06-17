var outputEl = document.getElementById("outputEl")


function showCarnivores (carnivores) {
	for (var i = 0; i < carnivores.length; i++) {

		var newPara = document.createElement("p");
		var insides = carnivores[i]

			newPara.innerText = insides;
			outputEl.appendChild(newPara)
	};
}

function showHerbivores (herbivores) {
	for (var i = 0; i < herbivores.length; i++) {

		var newPara = document.createElement("p");
		var insides = herbivores[i]

			newPara.innerText = insides;
			outputEl.appendChild(newPara)
	};
}

Predator.loadHerbivores(showHerbivores);
Predator.loadCarnivores(showCarnivores)