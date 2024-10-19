// export default function Todo({task ,isDone}) {
    
//     return (
//         <li>Task {task}</li>
//         // <li>Task {...task}</li>
//     )
// }
// 




// consitional rendering

// export default function Todo({task ,isDone}) {
    
//     if (isDone=== true) {
//         return <li>finished: {task}</li>
//     }
//     else{
//         return <li>work on : {task}</li>
//     }
// }



// export default function Todo({task ,isDone}) {
    
//    if (isDone) {
//     return <li>finished: {task}</li>
//    }
//    return <li>work on : {task}</li>
// }


// conditonal rendering 3 ternary operator

//  export default function Todo({task ,isDone}) {
    
//         return (
//             <li>{isDone ? 'finish :': 'work on :'}{task}</li>
//         )
//     }
    
    
    

// export default function Todo({task ,isDone}) {
    
//     return (
//         <li> {task} {isDone && ': Done'}</li>
        
//     )
// }


// export default function Todo({task ,isDone}) {
    
//     return (
//         <li> {task} {isDone || ': Do it '}</li>
        
//     )
// }




export default function Todo({task ,isDone}) {
    let listitem;
    if (isDone=== true) {
        listitem = <li>finished: {task}</li>
    }
    else{
        listitem = <li>work on : {task}</li>
    }
    return listitem;
}
