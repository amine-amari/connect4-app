
import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('red')
  const [board, setBoard] = useState<string[][]>(
    [
      ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
    ]
  )

  function flipColor(prev: string) {
    if(prev === 'red') setColor ('yellow')
    if (prev === 'yellow') setColor('red')
  }

  function updateColor(rowIndex: number, colIndex: number, color:string) {
    const newBoard = [...board]
    newBoard[rowIndex][colIndex] = color
    setBoard(newBoard)
    flipColor(color)
  }

  return (
    <div className='board'>
      {board.map((row, rowIndex) =>  (
       <div className='row-container'>
        {row.map((col, ColIndex) => (
          <div 
            className={`${col == 'red' ? 'cell-red' : 'cell' } ${col == 'yellow' ? 'cell-yellow' : 'cell' }`} 
            onClick={() => updateColor(rowIndex, ColIndex, color)}></div>
        ))}
      </div>
      )) }
 
    </div>
   
  )
}

export default App
