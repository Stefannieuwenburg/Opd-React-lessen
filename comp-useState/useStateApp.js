import React,{useState} from 'react';



function App() {

    const [count,setCount] = useState(4)
    const [theme,setTheme] = useState()

    function decrementCount(){
      setCount(prevCount => prevCount-1)
      setTheme("down")
    }
    function incrementCount(){
      setCount(prevCount => prevCount +1)
      setTheme("up")
    }
    return (
      <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
        
      </>
    )
}
export default App;