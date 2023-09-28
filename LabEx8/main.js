// Lab1Ex8
Array.prototype.myPush = function (...elements) {
	const originalLength = this.length
	for (let i = 0; i < elements.length; i++) {
		this[originalLength + i] = elements[i]
	}

	return this.length
}

function distributeElements(arr) {
	// СОздаем три пустых массива в которым перезапишем конечный результат 
	const positiveArray = [] 
	const negativeArray = []
	const zeroArray = []

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i] // Перезаписываем каждый итерацию в переменную для удобства
		if (element > 0) { // Если число больше 0 то записываем его в массив Позитив
			positiveArray.myPush(element)
		} else if (element < 0) { // Если число меньше 0 то записываем его в массив Негатив
			negativeArray.myPush(element)
		} else {
			zeroArray.myPush(element) // В конце если число равно 0 то записываем его в массив Нулевой
		}
	}

	return {
		// Здесь функция возвращает объект с тремя свойствами и каждый из них будет массивом который содержат числа
		positive: positiveArray, 
		negative: negativeArray,
		zero: zeroArray,
	}
}


const inputArray = [5, -3, 0, 8, -2, 0, 10]
const result = distributeElements(inputArray)

console.log("Положительные числа:", result.positive)
console.log("Отрицательные числа:", result.negative)
console.log("Нулевые числа:", result.zero)



