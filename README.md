# Вложенные массивы

## Введение
Массивы - полезные объекты для хранения наборов данных: списка чисел, строк, и тд. Они очень просты, и их гибкость дает неограниченные возможности для вас. Есть одна общая концепция, назовем ее *Вложенные массивы*. То есть можно создать такой массив, элементы которого в свою очередь тоже являются массивами. Массив массивов.


```javascript
tic_tac_toe_board = [
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "O", "X"]
]

first_row = tic_tac_toe_board[0]
# => ["X", "X", "O"]

first_row_third_column = first_row[2]
# => "O"
```
*Рисунок 1*.  Представление таблицы в виде *Массива масссивов*.

Вложенные массивы удобны для представления таблиц, таких как [tic-tac-toe board](https://en.wikipedia.org/wiki/Tic-tac-toe) (смотри Рисунок 1).  Обычно мы думаем о таблицах как о наборе строк и столбцов. Вложенные массивы - такая структура данных, которая достаточно хорошо передает наше восприятие таблиц. Мы можем думать о элементах нашего основного массива как о строках. А элементы внутри каждой строки - значения в соответствующем столбце.

Если мы хотим получить первую строку таблицы - обращаемся к нулевому(0) индексу массива. Когда у нас есть строка - можем получать значения из нужных нам столбцов. Рисунок 1 демонстрирует как мы можем получить первую строку таблицы, и как получить значение последнего столбца в этой строке.

На рисунке 1, чтобы получить значение из третьего столбца первой колонки, мы делаем промежуточный шаг, чтобы присвоить первую строку переменной. Затем мы используем переменную, чтобы получить значение, соответствующее 3-ему столбцу. Но мы можем упростить процесс получения нужного элемента следующим образом:
`tic_tac_toe[0][2]`.

Теперь вы знаете как обращаться к элементам во вложенных массивах. Давайте создадим несколько таких массивов самостоятельно.


## Релизы
### Релиз 0: Шахматная доска
```javascript
board = generate_chessboard
# => [ ... ]
board[7][0]
# => "W Rook"
```
*Рисунок 2*.  Создание шахматной доски, и получение значения из 1-го столбца, последний строки


Первое, что мы сделаем с использованием вложенных массивов - [шахматная доска](https://en.wikipedia.org/wiki/Chess#Rules).  Напишем функцию `generate_chessboard`, которая возвращает представление шахматной доски в виде массива массивов. Каждая клеточка должна Pieces should be represented as strings (e.g., `'W Knight'` or `'B Pawn'`) and be placed in their positions at the start of the game.  Empty spaces should be represented as `nil`.  Tests have been written to describe the board.  (See Figure 2 for method usage examples.)

Let's not make this more complicated than it needs to be; we just need to return the nested array.


### Релиз 1: Табличные данные

| Number  | Name        | Position       | Points per Game      |
|---------|-------------|----------------|----------------------|
| 12      | Joe Schmo   | Center         | [14, 32, 7, 0, 23]   |
| 9       | Ms. Buckets | Point Guard    | [19, 0, 11, 22, 0]   |
| 31      | Harvey Kay  | Shooting Guard | [0, 30, 16, 0, 25]   |
| 18      | Sally Talls | Power Forward  | [18, 29, 26, 31, 19] |
| 22      | MK DiBoux   | Small Forward  | [11, 0, 23, 17, 0]   |

*Table 1*.  Roster data for a basketball team.

A nested array could also be used to represent a data table—similar to a spreadsheet—like we see in Table 1.  Again, we have data that maps well to rows and columns.

```ruby
roster = generate_roster
# => [ ... ]
roster[1]
# => [12, "Joe Schmo", "Center", [14, 32, 7, 0, 23]]
roster[1][2]
# => "Center"
roster[1][3]
# => [14, 32, 7, 0, 23]
roster[1][3][0]
# => 14
```
*Figure 3*.  Generating a roster data table and accessing values.

Let's write a `generate_roster` method that represents the data shown in Table 1 as a nested array.  As with the `generate_chessboard` method, this method only needs to return the specified nested array.  Tests have been provided to help us determine whether or not our method is behaving as desired. (See Figure 3 for method usage examples.)


## Вывод
This challenge is designed to give us exposure to nested arrays.  What are they?  How can we use them to represent real-world data?  We'll encounter them as we continue through Dev Bootcamp.
