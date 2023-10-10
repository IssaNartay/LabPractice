class ListNode {
	constructor(value) {
		this.value = value // Значение
		this.next = null // Указатель
	}
}

class Stack {
	constructor() {
		this.head = null // Первый элемент и вершина
		this.tail = null // Последний элемент
		this.numbers = 0 // Количсество элементов
	}

	// Проверка на пустоту стека
	isEmpty() {
		return this.numbers === 0 // Возвращает тру или фолс, исходя пустой ли список или нет
	}

	size() {
		return this.numbers // Вернуть размер стека
	}

	// Добавить элемент в стек
	push(item) {
		const node = new ListNode(item)
		// Создаем новый элемент списка node с указанным значением item. Этот элемент будет представлять новый элемент в стеке.
		node.next = this.head // Затем устанавливается указатель node.next этого нового элемента на текущий верхний элемент стека.
		this.head = node // После этого мы обновляем this.head, чтобы он указывал на новый элемент node. Теперь новый элемент становится вершиной стека
		if (this.isEmpty()) {
			// Если стек был пуст, обновляем tail
			this.tail = node
		}
		this.numbers++
	}

	// Удалить вершину стека
	pop() {
		if (this.isEmpty()) {
			throw new Error("Стек пуст")
		}
		const item = this.head.value // Если стек не пустой, то мы сохраняем значение верхнего элемента стека в переменной item.
		this.head = this.head.next // Затем мы обновляем указатель this.haed, чтобы он указывал на следующий элемент в стеке. Поскольку мы удалили верхний элемент, теперь новый верхний элемент становится первым элементом стека.
		if (this.isEmpty()) {
			// Если стек стал пустым, обнуляем tail
			this.tail = null
		}
		this.numbers-- // мы уменьшаем количество элементов в стеке this.numbers на 1, чтобы отразить факт удаления элемента.
		return item //?
	}

	// Вернуть значение вершины стека
	top() {
		if (this.isEmpty()) {
			throw new Error("Стек пуст")
		}
		return this.head.value // Возрващаем вершину стека
	}

	// Перегрузка оператора вывода для вывода элементов стека
	toString() {
		let current = this.head
		const elements = []
		while (current) {
			elements.push(current.value + " -> ")
			current = current.next
		}
		return elements
	}
}

// Пример использования
const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)	
stack.push(4)
stack.push(5)

console.log("Стек:", stack.toString())
console.log("Размер стека:", stack.size())
console.log("Вершина стека:", stack.top())

stack.pop()
console.log("Стек после удаления вершины:", stack.toString())
