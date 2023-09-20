// Lab 2
// Нартайұлы Иса

// Запросить у пользователя размеры массивов
const M = +prompt("Введите размер массива (M):");
const N = +prompt("Введите размер массива (N):");

// Создаем метод myPush чтобы добавить элементы в конец массива 
Array.prototype.myPush = function (...elements) {
	const originalLength = this.length

	for (let i = 0; i < elements.length; i++) {
		this[originalLength + i] = elements[i]
	}

	return this.length
}

// Создаем метод myIndexOf чтобы найти индекс элемента из массива
Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
	const length = this.length
	let startIndex = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex)

	for (let i = startIndex; i < length; i++) {
		if (this[i] === searchElement) {
			return i
		}
	}
	return -1
}

// Создать и заполнить первый массив
const A = [];
for (let i = 0; i < M; i++) {
  A.myPush(+prompt(`Введите элемент A[${i}]:`))
}

// Создать и заполнить второй массив
const B = [];
for (let i = 0; i < N; i++) {
  B.myPush(+prompt(`Введите элемент B[${i}]:`))
}

// Создать третий массив для элементов из A, которых нет в B
const C = [];
for (let i = 0; i < M; i++) {
  const currentElement = A[i];

  // Проверить, есть ли текущий элемент в массиве B
  if (
		B.myIndexOf(currentElement) === -1 &&
		C.myIndexOf(currentElement) === -1
	) {
		C.myPush(currentElement)
	}
}

// Вывести результат
if (C.length === 0) {
  console.log("Элементы из массива A, которых нет в массиве B: Нет элементов.");
} else {
  console.log("Элементы из массива A, которых нет в массиве B, без повторений:", C);
}

