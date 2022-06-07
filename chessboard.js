function generateChessboard() {
    const board = [];
    const figures = ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'];
    const pawns = new Array(8).fill('Пешка');
    const empty = new Array(8).fill(null);
    const boardLength = 8;
    for(let i = 0; i < boardLength; i++) {
        if(i === 0){board.push(figures.map((el) => 'Б ' + el))}
        else if (i === 1){board.push(pawns.map((el) => 'Б ' + el))}
        else if (i === 6){board.push(pawns.map((el) => 'Ч ' + el))}
        else if (i === 7){board.push(figures.map((el) => 'Ч ' + el))}
        else {board.push(empty)}
    }
    return board
    // Тут твой код. Верни массив массивов.
}

function renderChessboard() {
    const emojis = {
        'Б Ферзь': '♕',
        'Б Король': '♔',
        'Б Слон': '♗',
        'Б Конь': '♘',
        'Б Ладья': '♖',
        'Б Пешка': '♙',
        'Ч Ферзь': '♛',
        'Ч Король': '♚',
        'Ч Слон': '♝',
        'Ч Конь': '♞',
        'Ч Ладья': '♜',
        'Ч Пешка': '♟'
    }
       const result = generateChessboard().map((el) => el.map((el) => emojis[el] ? emojis[el] : ' ').join(' ')).join('\n')
       
       return result
    // Тут твой код.
}
console.log(renderChessboard())

module.exports = {generateChessboard, renderChessboard};
