import { useState } from 'react'

const Home = () => {
 const [name, setName] = useState('mario')
 const [age, setAge] = useState(25)

    
    const handelClick = () => {
        setName('luigi')
        setAge(30)
      
    }
    
    return (
        <div className="Home">
        <h2>Homepage</h2>
        <p>{name} is {age} years old</p>
           <button onClick={handelClick}>Click Me</button> 
        </div>
    )
}

export default Home



