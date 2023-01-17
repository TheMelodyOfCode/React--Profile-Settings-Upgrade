
const Board =({onClick, squares})=>{
    /** 
      * @param {String} i is the index of the square
      * @returns the button/square with the index onClick */
    function renderSquare(i) {
      return (
          <button type='button' className="game__board--square" onClick={() => onClick(i)}>
          {squares[i]}
        </button>
      )
    }
  
    return (
      <div className="game__board"> 
          <div className="game__board--rowsContainer">
              <div className="game__board--row">
                  {renderSquare(0)}
                  {renderSquare(1)} 
                  {renderSquare(2)}
              </div>
              <div className="game__board--row">
                  {renderSquare(3)}
                  {renderSquare(4)}
                  {renderSquare(5)}
              </div>
              <div className="game__board--row">
                  {renderSquare(6)}
                  {renderSquare(7)}
                  {renderSquare(8)}
              </div>
  
          </div>
      </div>
    )
  }

  export default Board;