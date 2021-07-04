//Ingreso de opciones
var opciones = ["Piedra", "Papel", "Tijeras"];

do {
    var cantPartidas = prompt('Ingrese cantidad de jugadas: ');
} while (isNaN(cantPartidas) || cantPartidas < 0);

//Comienzo
if (cantPartidas > 0) {
    var ptsUser = 0;
    var ptsMachine = 0;
    for (i = 1; i <= cantPartidas; i++) {
        do {
            var decisionUser = +prompt(`
        Partida N°: ${i}
        Ingrese su opción:
        1) Piedra
        2) Papel
        3) Tijeras
        `);
        } while (
            isNaN(decisionUser) ||
            decisionUser < 1 ||
            decisionUser > 3
        );

        const decisionMachine = Math.floor(Math.random() * 3 + 1);
        alert(
            "El computador escogio: " + opciones[decisionMachine - 1]
        );

        //Asignación de variables para obtener resultados
        var u = decisionUser;
        var m = decisionMachine;
        var ganar = ("¡Ganaste!")
        var perder = ("¡Perdiste!")
        var empate = ("¡Empataste!")

        //Resultado según partida
        if (u == m) alert(empate);
        else if (u == 1 && m == 2) alert(perder), ptsMachine++;
        else if (u == 1 && m == 3) alert(ganar), ptsUser++;
        else if (u == 2 && m == 1) alert(ganar), ptsUser++;
        else if (u == 2 && m == 3) alert(perder), ptsMachine++;
        else if (u == 3 && m == 1) alert(perder), ptsMachine++;
        else if (u == 3 && m == 2) alert(ganar), ptsUser++;
    }

    // Resultados
    if (ptsUser > ptsMachine) { //gana
        alert(`
        Puntaje final:
        - Jugador: ${ptsUser}
        - Computadora: ${ptsMachine}
        
        ¡Has ganado!
        `)
    } else if (ptsUser < ptsMachine) { //pierde
        alert(`
            Puntaje final:
            - Jugador: ${ptsUser}
            - Computadora: ${ptsMachine}
            
            ¡Perdiste!
        `)
    } else if (ptsUser == ptsMachine) { //empate
        alert(`
            Puntaje final:
            - Jugador: ${ptsUser}
            - Computadora: ${ptsMachine}
            
            ¡Empate!
        `)
    }
    //Termino (en caso de no elegir bien)
} else {
    alert(`No comments`);
}