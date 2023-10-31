// Нартайұлы Иса
// Лаб 4 - №1


function addStarAtText(string, index = 0) {
	if (index >= string.length - 1) {
		return string[index]
	}

	return string[index] + "*" + addStarAtText(string, index + 1)
}

let string = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO"

console.log(addStarAtText(string))
