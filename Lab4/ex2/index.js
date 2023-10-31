// Нартайұлы Иса
// Лаб 4 - №2

// НОД(x, y) => НОД(y, x mod y)
// НОД - остаток от деление

function NOD(x ,y){
    if(y === 0){
        console.log('y: ' , y , 'x: ' , x)
        return y
    }

    else{
        console.log('y: ' , y , 'x: ' , x)
        NOD(y, x % y)
    }
}

console.log(NOD(9, 12))