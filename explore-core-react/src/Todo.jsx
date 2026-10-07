// export default function Todo({task,isDone}) {

//     return (
       
//         <>
//             <li>{task} is hobby</li>
            
//             </>

//     );

// }

export default function Todo({task,isDone,time=0}){
   
            if(isDone===true){
                return <li>Done : {task} Duration : {time}</li>
            }
            else{
                return <li>Pending : {task}</li>
            }
        

}