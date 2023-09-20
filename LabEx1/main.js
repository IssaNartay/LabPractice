// Lab 1
// Нартайұлы Иса

// Запрашиваем размеры массивов
let M = +prompt("Введите размер массива A:")
let N = +prompt("Введите размер массива B:")

// Создаем массивы A, B и C
let A = []
let B = []
let C = []

// Создаем метод myPush чтобы добавить элементы в конец массива 
Array.prototype.myPush = function (...elements) {
	const originalLength = this.length

	for (let i = 0; i < elements.length; i++) {
		this[originalLength + i] = elements[i]
	}

	return this.length
}

// Заполняем массив A
for (let i = 0; i < M; i++) {
	A.myPush(+prompt("Введите элемент A[" + i + "]:"))
}

// Заполняем массив B
for (let i = 0; i < N; i++) {
	B.myPush(+prompt("Введите элемент B[" + i + "]:"))
}

// Выводим массивы A и B
console.log("Массив A: " + A + " ")
console.log("Массив B: " + B + " ")

// Проверяем элементы массивов A и B на совпадение и добавляем их в массив C
for (let i = 0; i < M; i++) {
	for (let j = 0; j < N; j++) {
		if (A[i] === B[j]) {
			C.myPush(A[i])
		}
	}
}

// Выводим массив C
console.log("Массив C: " + C + " ")
