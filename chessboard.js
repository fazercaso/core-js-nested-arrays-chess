function generateChessboard() {
    const figures = ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'];
    const pawns = new Array(8).fill('Пешка');
    
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
       
    // Тут твой код.
}

module.exports = {generateChessboard, renderChessboard};
