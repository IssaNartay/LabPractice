class FixedCapacityStack {
	constructor(capacity) {
		this.array = new Array(capacity) // Статический массив
		this.number = 0 // Количество элментов
		this.capacity = capacity // Емкость
	}

	empty() {
		return this.number === 0 // Если стек пустой выводит тру фолс
	}

	full() {
		return this.number === this.capacity //Если стек полный выводит тру фолс
	}

	push(item) {
		if (this.full()) {
			throw new Error("Стек переполнен")
		}
		this.array[this.number] = item // Добавляем новый элемент на конец стека
		this.number++ // Затем код увеличивает значение переменной this.number на 1, чтобы отразить, что в стеке теперь на один элемент больше.
	}

	pop() {
		if (this.empty()) {
			throw new Error("Стек пуст")
		}
		this.number-- // Удаляем элемент с конца
		const item = this.array[this.number] // Перезаписываем новую вершину
		return item
	}

	top() {
		if (this.empty()) {
			throw new Error("Стек пуст")
		}
		return this.array[this.number - 1] // number === head. Удаляем с конца -1 чтобы вывести элемента который на вершине стека
	}

	toString() { // Вывод результата в консоль 
		let result = ""
		for (let i = 0; i < this.number; i++) {
			result += this.array[i] + " "
		}
		return result.trim()
	}
    
}

// Пример использования:
const stack = new FixedCapacityStack(5) // Задаем емкость для стека

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)


console.log("Стек:", stack.toString())
console.log("Вершина стека:", stack.top())

stack.pop()
stack.pop()

console.log("Стек после извлечения элемента:", stack.toString())
