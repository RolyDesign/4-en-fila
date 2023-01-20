const libre = 0,
    jugadorReal = 1,
    jugadorVirtual = -1
let arr = [[libre,libre,libre,libre,libre,libre,libre],
           [libre,libre,libre,libre,libre,libre,libre],
           [libre,libre,libre,libre,libre,libre,libre],
           [libre,libre,libre,libre,libre,libre,libre],
           [libre,libre,libre,libre,libre,libre,libre],
           [libre,libre,libre,libre,libre,libre,libre]].reverse();

let turnoJugador = jugadorReal;
const $header = document.querySelector('.header');


const executeGame = () => {
    
    $header.addEventListener('click', jugar, false);
}

// verifica si hay capacidad en la colomna y retorna la fila donde encontro la capacidad
const hasCapacity = (col) =>{
    let fila;
    let espasio = arr.find((el, i) => {
        if(el[col] === libre){
            fila = i
            return true
        }
        return false
    });
    
    if(espasio){
        return fila;
    }
    return null;
}
const evaluar = (jugador) => {
    let nameJugador = jugador == 1 ? 'Rojo' : 'amarillo';
    let horizontal = 0,
    vertical = 0,
    diagonal = 0;

// evaluando horizontales
    arr.forEach((el) => {
        el.forEach((e) =>{
            if(horizontal < 4){
                if(e == jugador){
                    horizontal++;
                }else{
                    horizontal = 0
                }
            }else {
                return document.querySelector('.message').textContent = 'Has ganado jugador' + '' + nameJugador; 
            }
        })
    })

    // evaluando verticales
//TODO
    
        arr.forEach((el) => {
            if(vertical < 4){
                for (let i = 0; arr.length - 4 + 1; i++) {
                    const element = array[i];
                    
                }
                if(el[0] == jugador){
                    vertical++
                }else{
                    vertical = 0
                }
            }
    
        })
    
}

const writeInGame = (fila,columna) => {
      const element = document.getElementById(`${fila}-${parseInt(columna)}`);
    if(turnoJugador == jugadorReal){  
        element.classList.add('red');
        arr[fila][columna] = jugadorReal;
        turnoJugador = jugadorVirtual;
        $header.classList.add('yellow')
        evaluar(jugadorReal);
       
        
    }else{
        element.classList.add('yellow');
        arr[fila][columna] = jugadorVirtual;
        turnoJugador = jugadorReal;
        $header.classList.remove('yellow')
        evaluar(jugadorVirtual);
        
    }
   
}

const soltarFicha = (col) =>{
    const fila = hasCapacity(col)
    if(fila !== null){
       writeInGame(fila, col);
    }
    return
    
}

const jugar = (e) => {
    const t = e.target,
        d= t.dataset
    if(t.matches('button')){
        soltarFicha(d.number)
    }
}




document.addEventListener('load', executeGame(), false);
