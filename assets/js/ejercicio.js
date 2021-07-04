function aleatorio(minimo, maximo) {
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ['Piedra', 'Papel', 'Tijeras'];

var opcionUsuario;
var opcionMaquina;

do {
    var cantidadJuegos = prompt('Elige cuantas veces quieres jugar:');
} while (isNaN(cantidadJuegos) || cantidadJuegos < 0);

if (cantidadJuegos > 0) {
    
 
    for (i = 1; i <= cantidadJuegos; i++) {

        opcionUsuario = prompt('Ingresa \nPiedra: 0 \nPapel: 1 \nTijeras: 2');
        const aleatorio = Math.floor(Math.random() * 3 + 1);

        alert('Elegiste ' + opciones[opcionUsuario]);
        alert('La máquina eligió ' + opciones[aleatorio - 1]);
        opcionMaquina = opciones[aleatorio - 1];

        if (opcionUsuario == piedra) {
            if (opcionMaquina == piedra) {
                alert('Empate');
            } else if (opcionMaquina == papel) {
                alert('Perdiste');
            } else if (opcionMaquina == tijera) {
                alert('Ganaste')
            }
        } else if (opcionUsuario == 1) {
            if (opcionMaquina == papel) {
                alert('Empate');
            } else if (opcionMaquina == tijera) {
                alert('Perdiste');
            } else if (opcionMaquina == papel) {
                alert('Ganaste');
            }
        } else if (opcionUsuario == 2) {
            if (opcionMaquina == tijera) {
                alert('Empate');
            } else if (opcionMaquina == piedra) {
                alert('Perdiste');
            } else if (opcionMaquina == papel) {
                alert('Ganaste');
            }
        }
    }
}