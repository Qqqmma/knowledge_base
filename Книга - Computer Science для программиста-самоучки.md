---
author:
  - Кори Альтхофф
genre:
  - техническая
status: Прочитано
rating: 5
date_started: 2026-03-17
date_finished: 2026-05-18
type: book
---
# "Computer Science для программиста-самоучки" - Кори Альтхофф
## Алгоритмы
### Глава 1. Что такое алгоритм
Алгоритм (по Кнуту) - это определенный, эффективный и конечный процесс, который получает входные данные и производит выходные на основе входных.
Определенный - означает, что шаги четкие, лаконичные и не двусмысленные.
Эффективный - означает, что вы можете выполнить каждую операцию для решения задачи.
Конечность - подразумевает, что алгоритм останавливается после определенного количества шагов.

Порядок величины
Временная сложность - максимальное количество шагов по мере увеличения n (размера задачи).
#### О большое

### Глава 2. Рекурсия
Рекурсия - вызов в функции самой себя для решения задачи.
Терминальная ветвь - случай функции с рекурсией, при которой она не вызывает саму себя, а возвращает значение.
Рекурсивный алгоритм должен иметь как минимум одну рекурсивную и одну терминальную ветвь.
### Глава 3. Поисковые алгоритмы
#### Линейный поиск
**Временная сложность:** O(n)
Проходим по каждому элементу списка и сравниваем его с искомым значением.
Стоит применять линейный поиск в случаях поиска по неотсортированным массивам данных.
#### Двоичный поиск
Массив данных должен быть отсортирован.
```Python
def binary_search(array, n):
	first = 0
	last = len(array) - 1
	while last >= first:
		mid = (first + last) // 2
		if array[mid] == n:
			return True
		else:
			if n < array[mid]:
				last = mid - 1
			else:
				first = mid + 1
	return False
```
### Глава 4. Алгоритмы сортировки
Устойчивая и неустойчивая сортировки.
#### Пузырьковая сортировка
Называется так из-за того что наибольшие значения "всплывают" в конец последовательности.
```Python
def bubble_sort(array):
	array_length = len(array) - 1
	for i in range(array_length):
		for j in range(array_length):
			if array[j] > array[j+1]:
				array[j], array[j+1] = array[j+1], array[j]
	return array
```
**Временная сложность:** O(n\*\*2)
#### Сортировка вставками
Наиболее эффективен при сортировке списков, данные которых уже почти отсортированы.
```Python
def insertion_sort(array):
	for i in range(1, len(array)):
		value = array[i]
		while i > 0 and array[i - 1] > value:
			array[i] = array[i - 1]
			i = i - 1
		array[i] = value
	return array
```
**Временная сложность:** О(n*\*2)
#### Сортировка слиянием
Рекурсивный алгоритм, который разбивает список пополам до тех пор пока мы не получим много списков, состоящих из одного числа, и потом уже с уровня этих списков с одним элементом формируются новые отсортированные списки.
```Python
def merge_sort(array):
	if len(array) > 1:
		mid = len(array) // 2
		left_half = array[:mid]
		right_half = array[mid:]
		merge_sort(left_half)
		merge_sort(right_half)
		
		left_ind = 0
		right_ind = 0
		array_ind = 0
	
		while left_ind < len(left_half) and right_ind < len(right_half):
			if left_half[left_ind] <= right_half[right_ind]:
				array[array_ind] = left_half[left_ind]
				left_ind += 1
			else:
				array[array_ind] = right_half[right_ind]
				right_ind += 1
			array_ind += 1
			
		while left_ind < len(left_half):
			array[array_ind] = left_half[left_ind]
			array_ind += 1
			left_ind += 1
			
		while right_ind < len(right_ind):
			array[array_ind] = right_half[right_ind]
			array_ind += 1
			right_ind += 1
```
**Временная сложность:** O(n\*log n)
**Алгоритм типа "Разделяй и властвуй".** Подобные алгоритмы рекурсивно разбивают одну задачу на две или более связанных подзадач до тех пор, пока не будет возможности очень просто решить эти задачи.
#### Быстрая сортировка
Алгоритм типа "разделяй и властвуй". 
Суть заключается в том, чтобы выбрать опорный элемент (это может быть любой элемент последовательности) и разделить последовательность на 3 подгруппы - равные опорному, больше опорного и меньше опорного. Для последовательностей больше опорного и меньше опорного нужно применить тот же алгоритм. 
```Python
def quick_sort(array):
    result = []
    if len(array) <= 1:
        return array
    
    reference = array[len(array) // 2]
    lost = []
    more = []
    equal = []
    
    for item in range(len(array)):
        if array[item] > reference:
            more.append(array[item])
        elif array[item] < reference:
            lost.append(array[item])
        else:
            equal.append(array[item])

    return quick_sort(lost) + equal + quick_sort(more)
```
**Временная сложность:** О(n log n)
#### Вывод
В `python` есть свои методы сортировки, которые используют гибридный подход с использованием нескольких алгоритмов в зависимости от ситуации или всех сразу, которые работают эффективно, поэтому приведенные здесь функции должны служить для понимания конкретных алгоритмов сортировки.
### Глава 5. Строковые алгоритмы
### Глава 6. Математика
#### Двоичная система исчисления
**Вес разряда** - числовое значение, которое принимает цифра в зависимости от своего положения в числе.
![[Pasted image 20260331122330.png]]
![[Pasted image 20260331122426.png]]
#### Побитовые операторы
##### Проверка четности
```Python
def is_even(n):
	return not n & 1
```
##### Проверка является ли число степенью двойки
```Python
def is_power(n):
	if n & (n - 1) == 0:
		return True
	return False
```
#### Наибольший общий делитель
##### Линейный способ
```Python
def gcf(n1, n2):
	if n1 < 0 or n2 < 0:
		return ValueError('Numbers must be positive.')
	
	if n1 == 0:
		return n2
	if n2 == 0:
		return n1
	if n1 == 0 and n2 == 0:
		return ValueError('One numbers must be not null.')
		
	if n1 > n2:
		smaller = n2
	else:
		smaller = n1
		
	for divisor in range(1, smaller + 1):
		if (n1 % divisor == 0) and (n2 % divisor == 0):
		gcf = divisor
		
	return gcf
```
##### Алгоритм Евклида
Для начала делим одно число `x` на делитель `y`. Если есть остаток, то он устанавливается как значение `y`, а предыдущее значение `y` устанавливается как значение `x`. Так продолжается до тех пор, пока остаток не будет равен `0`. Когда остаток стал равен `0` - мы понимаем, что `y` - наибольший делитель.

Например нам нужно узнать наибольший общий делитель `20` и `12`:
`20 / 12 = 1, остаток = 8`
`12 / 8 = 1, остаток = 4`
`8 / 4 = 2, остаток = 0`
Вывод: наибольшим общим делителем `20` и `12` является `4`. 

```Python
def gcf(x, y):
	if y == 0:
		x, y = y, x
	while y != 0:
		x, y = y, x % y
	return x
```
#### Простые числа
**Простое число** - положительное целое число, которое делится только на себя и на 1.
```Python
def is_prime(n):
	for i in range(2, n):
		if n % i == 0:
			return False
	return True
```

Чтобы понять, что число простое, достаточно проверить не делится ли оно на числа до его квадратичного корня.
```Python
import math

def is_prime(n):
	for i in range(2, int(math.sqrt(n)) + 1):
		if n % i == 0:
			return False

	return True
```

## Структуры данных
### Что такое структуры данных
*"Алгоритм + структура данных = программа" - Николаус Вирт*

**Структура данных** - способ организации данных в компьютере, позволяющий программе эффективно с ним работать.
### Массивы
**Список** - абстрактный тип данных, описывающий структуру данных, в которой хранятся упорядоченные значения. Обычно у списка есть методы создания пустого списка, добавления элемента в начало и конец, а так же есть возможность обращаться к элементам по индексу.
**Массив** - структура данных, которая сохраняет элементы с индексами в непрерывном блоке памяти. 
**Однородная структура данных** - структура, которая может хранить элементы только одного типа данных, например `integer`.
#### Перемещение нулей
```Python
def move_zeros(array):
	zero_index = 0
	for index, n in enumerate(array):
		if n != 0:
			array[index] = n
			if zero_index != index
				array[index] = 0
			zero_index += 1
	return array
```
#### Объединение двух списков
```Python
movie_list = [ "Interstellar", "Inception", "The Prestige", "Insomnia", "Batman Begins" ]
ratings_list = [1, 10, 10, 8, 6]

print(list(zip(movie_list, rating_list)))
```
#### Поиск дубликатов в списке
```Python
def get_dups(an_iterable):
	dups = []
	a_set = set()
	
	for item in an_iterable:
		l1 = len(a_set)
		a_set.add(item)
		l2 = len(a_set)
		if l1 == l2:
			dups.append(item)
	
	return dups
```
#### Поиск области пересечения двух списков
```Python
def get_inter(list1, list2):
	list3 = [v for v in list1 if v in list2]
	return list3
```

```Python
def get_inter(list1, list2):
	set1 = set(list1)
	set2 = set(list2)
	return list(set1.intersection(set2))
```
### Связные списки
Список, в котором у элементов нет индекса, а каждый элемент ссылается на следующий.
Эффективен при добавлении и удалении элементов. Эти операции имеют сложность **O(1)**.
Неэффективен при поиске доступу к элементам. Сложность этих операций - **O(n)**.
### Стек
**Стек** - это абстрактный тип данных, в котором можно удалить только последний добавленный элемент.
Эффективен при добавлении и удалении элементов.
Неэффективны в случаях, когда необходим доступ к каждому фрагменту данных в наборе данных.

##### Реализация стеков на ptyhon на основе массивов
```Python
class Stack:
	def __init__(self):
		self.items = []
	
	def push(self, data):
		return self.items.append(data)
		
	def pop(self):
		return self.items.pop()
		
	def size(self):
		return len(self.items)
		
	def is_empty(self):
		return len(self.items) == 0
		
	def peek(self):
		return self.items[-1]
```
##### Реализация стеков на python на основе связанных списков
```Python
class Node:
	def __init__(self, data):
			self.data = data
			self.next = None
			
class Stack:
	def __init__(self):
		self.head = None
		
	def push(self, data):
		node = Node(data)
		if self.head is None:
			self.head = node
		else:
			node.next = self.head
			self.head = node
	
	def pop(self):
		if self.head is None:
			raise IndexError('pop from empty stack')
		poppednode = self.head
		self.head = self.head.next
		return poppednode.data
```
### Очереди
**Очередь** - представляет собой абстрактный тип данных и линейную структуру данных, в которой можно добавлять элементы только в конец, а удалять только из начала.
#### Реализация при помощи связанных списков
```Python
class Node:
	def __init__(self, data):
		self.data = data
		self.next = None
		
class Queue:
	def __init__(self):
		self.front = None
		self.rear = None
		self._size = 0
		
	def enqueue(self, item):
		self._size += 1
		node = Node(item)
		if self.rear is None:
			self.front = node
			self.rear = node
		else:
			self.rear.next = node
			self.rear = node
			
	def dequeue(self):
		if self.front is None:
			return ValueError('pop from empty queue')
		self._size -= 1
		temp = self.front
		self.front = self.front.next
		if self.front is None:
			self.rear = None
		
		return temp.data
		
	def size(self):
		return self._size
```
#### Использование встроенного класса очереди
```Python
from queue import Queue 

q = Queue() 
q.put('a') 
q.put('b') 
q.put('c') 

print(q.qsize()) 
for i in range(3): 
	print(q.get())
```
#### Очередь с помощью двух стеков
```Python
class Queue:
	def __init__(self):
		self.s1 = []
		self.s2 = []
		
	def enqueue(self, item):
		while len(self.s1) != 0:
			self.s2.append(self.s1.pop())
		self.s1.append(item)
		while len(self.s2) != 0:
			self.s1.append(self.s2.pop())
			
	def dequeue(self):
		if len(self.s1) == 0:
			raise Exception('Cannot pop from empty queue')
		return self.s1.pop()
```
#### Очередь с помощью двух стеков с эффективным добавлением элементов в очередь
```Python
class Queue:
    def __init__(self):
        self.s1 = []   # стек для добавления (вход)
        self.s2 = []   # стек для удаления (выход)
        
    def enqueue(self, item):
        """O(1) — просто кладём во входной стек"""
        self.s1.append(item)
        
    def dequeue(self):
        """Амортизированное O(1) — перекладываем только когда s2 пуст"""
        if not self.s1 and not self.s2:
            raise Exception('Cannot pop from empty queue')
            
        # Если выходной стек пуст — перекладываем ВСЕ элементы из s1 в s2
        if not self.s2:
            while self.s1:
                self.s2.append(self.s1.pop())
                
        return self.s2.pop()
```
### Хэш-таблицы
**Ассоциативный массив** - абстрактный тип данных, в которых хранятся пары "ключ - значение" с уникальными ключами. 
### Двоичные деревья
**Дерево** - нелинейный абстрактный тип данных, состоящий из узлов, объединённых в иерархическую структуру.
![[Pasted image 20260429105142.png]]

**Общее дерево** - структура данных, которая начинается с узла наверху, называемого *корневым*. Каждый узел, связанный с узлом, находящимся над ним в дереве - *дочерний узел*. Узел с одним или более дочерними узлами - *родительский узел*. У *братских узлов* имеется один общий родительский узел. Соединение между двумя узлами в дереве называется *ребром*.

**Двоичное дерево** - древовидная структура данных, в которой у каждого узла может быть только два дочерних узла. Каждый узел двоичного дерева, кроме корневого, является либо левым, либо правым дочерним элементом родительского узла.

**Двоичное дерево поиска** - древовидная структура данных, в которой у каждого узла может быть только два дочерних узла. Дерево хранит свои узлы в отсортированном порядке, где значение каждого узла больше любого значения в его правом поддереве и меньше любого значения в его левом поддереве. Нельзя хранить дубликаты. Можно обойти ограничение на хранение дубликатов, если добавить поле счетчика в объекты узлов вашего дерева для отслеживания появлений данного значения.
#### Когда использовать двоичные деревья
Операции с деревьями менее эффективны чем с другими структурами данных, но они полезны в задачах, когда нужна *иерархическая структура*. 
#### Реализация двоичного дерева
```Python
class BinaryTree:
	def __init__(self, value):
		self.key = value
		self.left_child = None
		self.right_child = None
		
	def insert_left(self, value):
		if self.left_child == None:
			self.left_child = BinaryTree(value)
		else:
			bin_tree = BinaryTree(value)
			bin_tree.left_child = self.left_child
			self.left_child = bin_tree
	
	def insert_tight(self, value):
		if self.right_child == None:
			self.right_child = BinaryTree(value)
		else:
			bin_tree = BinaryTree(value)
			bin_tree.right_child = self.right_child
			self.right_child = bin_tree
			
```
#### Обход дерева в ширину
```Python
class BinaryTree:
	def __init__(self, value):
		self.key = value
		self.left_child = None
		self.right_child = None
		
	def insert_left(self, value):
		if self.left_child == None:
			self.left_child = BinaryTree(value)
		else:
			bin_tree = BinaryTree(value)
			bin_tree.left_child = self.left_child
			self.left_child = bin_tree
	
	def insert_tight(self, value):
		if self.right_child == None:
			self.right_child = BinaryTree(value)
		else:
			bin_tree = BinaryTree(value)
			bin_tree.right_child = self.right_child
			self.right_child = bin_tree
			
	def breadth_first_search(self, n):
		current = [self]
		next = []
		while current:
			for node in current:
				if node.key = n:
					return True
				if node.left_child:
					next.append(node.left_child)
				if node.right_child:
					next.append(node.right_child)
			current = next
			next = []
		return False
```
#### Инвертирование двоичного дерева
```Python
class BinaryTree:
	def __init__(self, value):
		self.key = value
		self.left_child = None
		self.right_child = None
		
	def insert_left(self, value):
		if self.left_child == None:
			self.left_child = BinaryTree(value)
		else:
			bin_tree = BinaryTree(value)
			bin_tree.left_child = self.left_child
			self.left_child = bin_tree
	
	def insert_tight(self, value):
		if self.right_child == None:
			self.right_child = BinaryTree(value)
		else:
			bin_tree = BinaryTree(value)
			bin_tree.right_child = self.right_child
			self.right_child = bin_tree
			
	def invert(self):
		current = [self]
		next = []
		
		while current:
			for node in current:
				if node.left_child:
					next.append(self.left_child)
				if node.right_child:
					next.append(self.right_child)
				tmp = node.left_child
				node.left_child = node.right_child
				node.right_child = tmp
			current = next
			next = []
```
### Двоичные кучи
**Очередь с приоритетом** - абстрактный тип данных, описывающий структуру данных, в котором каждый фрагмент обладает определенным приоритетом.
**Куча** - древовидная структура данных, в которой каждый узел отслеживает два фрагмента данных: сами данные и их приоритет. Можно называть значение узла кучи *ключом*.
**Двоичная куча** - куча, созданная при помощи двоичного дерева.
#### Когда использовать кучи
Кучи полезны каждый раз, когда необходимо выполнять задачи в соответствии с приоритетом.
#### Соединение каната с минимальными затратами

### Графы
**Граф** - абстрактный тип данных, в котором фрагмент данных соединяется с одним или несколькими другими фрагментами данных. Каждый фрагмент данных в графе называется *вершиной* или *узлом*. Соединение между вершинами в графе называется *ребром*. Ребра графа могут содержать *вес* - затраты на перемещение между вершинами.

**Ориентированный граф** - тот, в котором у каждого ребра есть связанное с ним направление и между двумя вершинами можно перемещаться только в этом направлении. Ориентированный граф является хорошим выбором для *отражения социальных связей в соц. сетях.*

**Неориентированный граф** - граф с двунаправленными ребрами, позволяющий перемещаться вперед и назад в любом направлении между двумя связанными вершинами.

**Полный граф** - граф, где каждая вершина соединена со всеми другими.
```Python
class Vertex:
	def __init__(self, key):
		self.key = key
		self.connections = {}
		
	def add_adj(self, vertex, weight=0):
		self.connections[vertex] = weight
		
	def get_connections(self):
		return self.connections.keys()
		
	def get_weight(self, vertex):
		return self.connections[vertex]
		
class Graph:
	def __init__(self):
		self.vertex_dict = {}
		
	def add_vertex(self, key):
		new_vertex = Vertex(key)
		self.vertex_dict[key] = new_vertex
		
	def get_vertex(self, key):
		if key in self.vertex_dict:
			return self.vertex_dict[key]
		return None
		
	def add_edge(self, f, t, weight=0):
		if f not in self.vertex_dict:
			self.add_vertex(f)
		if t not in self.vertex_dict:
			self.add_vertex(t)
		self.vertex_dict[f].add_adj(self.vertex_dict[t], weight)
```
#### Алгоритм Дейкстры
Наиболее известный алгоритм поиска кратчайшего пути в графе.
