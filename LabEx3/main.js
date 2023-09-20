// Lab 3
// Нартайұлы Иса

// Запрашиваем у пользователя размеры массивов А и В
let M = +prompt("Введите размер массива A:")
let N = +prompt("Введите размер массива B:")

// Создаем пустой третий массив
let C = []

// Создаем метод myPush чтобы добавить элементы в конец массива 
Array.prototype.myPush = function (...elements) {
	const originalLength = this.length

	for (let i = 0; i < elements.length; i++) {
		this[originalLength + i] = elements[i]
	}

	return this.length
}


// Создаем метод myIncludes чтобы проверить есть ли элементы в массиве 
Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
	const length = this.length
	let startIndex = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex)

	for (let i = startIndex; i < length; i++) {
		if (this[i] === searchElement) {
			return true
		}
	}

	return false
}

// Создаем массивы А и В и заполняем их случайными числами
let A = []
for (let i = 0; i < M; i++) {
	A.myPush(+prompt(`Введите элемент A[${i}]:`))
}

let B = []
for (let i = 0; i < N; i++) {
	B.myPush(+prompt(`Введите элемент B[${i}]:`))
}

// Выводим массивы А и В
console.log("Массив А:", A)
console.log("Массив B:", B)

// Обходим массив А
for (let i = 0; i < M; i++) {
	let isCommon = false

	// Проверяем, есть ли текущий элемент массива А в массиве В
	for (let j = 0; j < N; j++) {
		if (A[i] === B[j]) {
			isCommon = true
			break
		}
	}

	// Если текущий элемент не общий, добавляем его в массив С (если его там еще нет)
	if (!isCommon && !C.myIncludes(A[i])) {
		C.myPush(A[i])
	}
}

// Обходим массив В
for (let i = 0; i < N; i++) {
	let isCommon = false

	// Проверяем, есть ли текущий элемент массива В в массиве А
	for (let j = 0; j < M; j++) {
		if (B[i] === A[j]) {
			isCommon = true
			break
		}
	}

	// Если текущий элемент не общий, добавляем его в массив С (если его там еще нет)
	if (!isCommon && !C.myIncludes(B[i])) {
		C.myPush(B[i])
	}
}

// Выводим массив С
console.log("Массив С:", C)
