// Lab 4
// Нартайұлы Иса

// Функция для добавления блока элементов в конец массива без использования методов
function addElementsToEnd(arr, elementsToAdd) {
  if (Array.isArray(arr) && Array.isArray(elementsToAdd)) {
    for (let i = 0; i < elementsToAdd.length; i++) {
      arr[arr.length] = elementsToAdd[i];
    }
  } else {
    console.log("Ошибка: Аргументы должны быть массивами.");
  }
}

// Пример использования функции
const myArray = [1, 2, 3];
const elementsToAdd = [4, 5, 6];

addElementsToEnd(myArray, elementsToAdd);

console.log(myArray); // Выведет: [1, 2, 3, 4, 5, 6]


