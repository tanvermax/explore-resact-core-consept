import { useState } from "react"

export default function Counter(){
    const [count,setCount]= useState(0);
    const handleAdd=()=>{
        const newCount = count+1;
        setCount(newCount)
    }
    const handleDelet=()=>{
        
            const newCount = count-1;
            

        
        setCount(newCount)
    }
    return(
        <div style={{border:'2px solid yellow',padding:'20px',borderRadius:'20px'}}>
            <h3>Counter :{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button style={{marginLeft:'10px'}} onClick={handleDelet}>Delet</button>
        </div>
    )
}