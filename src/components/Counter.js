// in this component I am use props and HOOKS useState
import React,{useState} from 'react'

function Counter(props) {
    const [count, setCount] = useState(0)

function ClickMe(){
    setCount(count+1)
}

  return (
    <>
    <div className='container'>
        <h1> {props.heading}{count} Times </h1>
    
    <button onClick={ClickMe}> Click Me</button>
    </div>
    </>
  )
}

export default Counter