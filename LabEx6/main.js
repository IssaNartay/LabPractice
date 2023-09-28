// LabEx6
// Создать функцию, позволяющую удалять блок элементов, начиная с произвольного индекса массива.
Array.prototype.myPush = function (...elements) {
	const originalLength = this.length
	for (let i = 0; i < elements.length; i++) {
		this[originalLength + i] = elements[i]
	}

	return this.length
}

let removeElement = function (arr, index) {
	let resultArray = []

	if (Array.isArray(arr)) { // Проверка на тип массива
		for (let i = 0; i < arr.length; i++) {
			if (i !== index) { // Если индекс i не совпадает с index то текущий элемент добавляется в resultArray
				resultArray.myPush(arr[i])
			}
		}
		return resultArray
	} else {
		console.log("Это не массив")
	}
}

let array = [1, 2, 3, 4, 5]
let indexToRemove = 2

console.log(removeElement(array, indexToRemove))
// Вывод: [1, 2, 4, 5]
