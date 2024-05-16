import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleRemove = () =>{
        const oldCount = count - 1;
        setCount(oldCount)
    }
    

    return(
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Reduce</button>
        </div>
    )
}