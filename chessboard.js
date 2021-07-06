function generateChessboard() {
    const figures = ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook'];
    const pawns = new Array(8).fill('Pawn');
    
    // Your code is here. Returned is array of arrays.
    // B = black, W = white
}

function renderChessboard() {
    const emojis = {
        'W Queen': '♕',
        'W King': '♔',
        'W Bishop': '♗',
        'W Knight': '♘',
        'W Rook': '♖',
        'W Pawn': '♙',
        'B Queen': '♛',
        'B King': '♚',
        'B Bishop': '♝',
        'B Knight': '♞',
        'B Rook': '♜',
        'B Pawn': '♟'
    }
       
    // Your code is here.
}

module.exports = {generateChessboard, renderChessboard};
