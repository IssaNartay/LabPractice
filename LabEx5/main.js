// Lab 5
// Нартайұлы Иса


// Создаем метод myPush чтобы добавить элементы в конец массива 
Array.prototype.myPush = function (...elements) {
	const originalLength = this.length

	for (let i = 0; i < elements.length; i++) {
		this[originalLength + i] = elements[i]
	}

	return this.length
}

// Функция для вставки блока элементов в массив, начиная с указанного индекса
function insertElementsAt(arr, startIndex, elementsToInsert) {
  if (Array.isArray(arr) && Array.isArray(elementsToInsert) && startIndex >= 0 && startIndex <= arr.length) {
    // Создаем новый массив, который будет содержать результат вставки
    const resultArray = [];

    // Копируем элементы из исходного массива до указанного индекса
    for (let i = 0; i < startIndex; i++) {
      resultArray.myPush(arr[i])
    }

    // Вставляем элементы из elementsToInsert
    for (let i = 0; i < elementsToInsert.length; i++) {
      resultArray.myPush(elementsToInsert[i])
    }

    // Копируем оставшиеся элементы из исходного массива
    for (let i = startIndex; i < arr.length; i++) {
      resultArray.myPush(arr[i])
    }

    // Заменяем исходный массив на результат вставки
    arr.length = 0;
    for (let i = 0; i < resultArray.length; i++) {
      arr.myPush(resultArray[i])
    }
  } else {
    console.log("Ошибка: Некорректные аргументы.");
  }
}

// Пример использования функции
const myArray = [1, 2, 6];
const startIndex = 2; // Начать вставку с индекса 2
const elementsToInsert = [3, 4, 5];

insertElementsAt(myArray, startIndex, elementsToInsert);

console.log(myArray); // Выведет: [1, 2, 3, 4, 5, 6]


