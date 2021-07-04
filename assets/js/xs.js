var userChoice = prompt("¿Eliges piedra, papel o tijeras?");
		
		//Luego generamos un numero random para la computadora entre 0 y 1
		var computerChoice = Math.random();
		
		//Elegimos una opción para la computadora según el resultado
		if (computerChoice < 0.34) {
		    computerChoice = "piedra";
		} else if(computerChoice <= 0.67) {
		    computerChoice = "papel";
		} else {
		    computerChoice = "tijeras";
		}

		//Imprimimos los resultados en la consola
		console.log("Opción del Usuario: " + userChoice);
		console.log("Opción de la Computadora: " + computerChoice);
		
		//Comparamos los resultados para ver quien gano

		//Primero comparamos si son iguales
		if(userChoice === computerChoice) {
		    alert( "¡El restultado es un empate!");
		}

		//Luego decidimos qué pasa si el usuario selecciono piedra
		if(userChoice === "piedra") {
		    if(computerChoice === "tijeras") {
		        alert( "piedra gana!");
		    } else {
		        if(computerChoice === "papel"){
		        	alert( "papel gana!");
			    }	
			}
		}

		//Luego decidimos qué pasa si el usuario selecciono papel
		if(userChoice === "papel") {
		    if(computerChoice === "piedra") {
		        alert( "papel gana!");
		    } else {
		        if(computerChoice === "tijeras") {
		            alert( "tijeras gana!");
			    }   
			}
		}

		//Luego decidimos qué pasa si el usuario selecciono tijeras
		if(userChoice === "tijeras") {
		    if(computerChoice === "piedra") {
		        alert( "piedra gana!");
		    } else {
		        if(computerChoice === "papel") {
		            alert( "tijeras gana!");
		        }
		    }
		}