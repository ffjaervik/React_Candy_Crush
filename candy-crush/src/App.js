import { useState,useEffect } from "react";

const width = 8
const candyColors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow']

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])

  const createBoard = () => {
    const randomColorArrangement = [];
    for ( let i = 0; i < width*width; i++){
      // const randomNumberFrom0To5 = Math.floor(Math.random() * candyColors.length)
      // const randomColor = candyColors[randomNumberFrom0To5]
      // Same as the the line bellow
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(randomColor)
    }
    setCurrentColorArrangement(randomColorArrangement)
  }
  useEffect(() => {
    createBoard()
  }, [])
  console.log(currentColorArrangement)


	return <div></div>
}

export default App
