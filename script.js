const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    const board = [];

    const getBoard = () => board;

    // Represents one cell in the game board
    function createCell() {
        let value = 0;

        const getValue = () => value;
        const setValue = (newValue) => value = newValue;

        return { getValue, setValue };
    }

    // Create game board array
    for (let i = 0; i < rows; i++) {
        // Each row is an Array
        board[i] = [];

        for (let j = 0; j < columns; j++) {
            board[i].push(createCell());
        }
    }

    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
    };

    const placePlayerMarker = (column, row, player) => {

    };

    return { getBoard, printBoard, placePlayerMarker };
})();