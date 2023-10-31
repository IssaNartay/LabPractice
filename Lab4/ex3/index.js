// Нартайұлы Иса
// Лаб 4 - №3

function fib(n) {
	if (n < 1) {
		//Базовый случай
		return 0
	}

	if (n === 1) {
		//Базовый случай
		return 1
	}

	return fib(n - 1) + fib(n - 2) // Рекурсивный случай
}
let n = 3
console.log(fib(n))