import { useState } from "react"

export default function Team(){


    const [team,setTeam] = useState(11);
    const handleAdd= ()=>{
           const newTeam= team+1;
           setTeam(newTeam);
    }
    const handleRemove= ()=>{
        const newTeam= team-1;
        setTeam(newTeam);
 }

    const teamstyle={
        border:'2px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    return(
        <div style={teamstyle}>
            <h3>Players : {team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}