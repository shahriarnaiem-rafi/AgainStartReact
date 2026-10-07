// export default function My({name,prof}) {
//     return (

//         <>
//             <h1>THis is my page</h1>
//             <p>THis is my name {name}</p>
//             <p>THis is my name {prof}</p>
//         </>
//     );

// }
// export default function My({ name, prof, isDone }) {
//     if (isDone === true) {
//         return <>
//             <h1>THis is my page</h1>
//             <p>THis is my name {name}</p>
//             <p>THis is my name {prof}</p></>
//     }
//     else {
//         return (
//             <>
//                 <h1>THis is my page</h1>
//                 <p>THis is my name {name} </p>
//                 <p>THis is my name {prof} to be done</p></>
//         )
//     };
// }


// condition rendering : 3  ternary

// export default function My({isDone,name,prof}){
//      return isDone ? <li>{name} is a good {prof}</li>: <li>{name} is a not  good {prof}</li>;
// };

// conditional redering : 4 && 
// export default function My({isDone,name,prof}){
//      return isDone && <li>done {name} {prof}</li>
// };


// condition rendering : 5  ||

// export default function My({isDone,name,prof}){
//      return isDone || <li> not done {name} {prof}</li>
//  };




// condition rendering : 6 use veriable 
export default function My({ name, prof, isDone,time }) {
    const displayTIme= time?time:100;

    let listItem;
    if (isDone === true) {
        listItem =<li>DOne : {prof} time {displayTIme}</li>;
    }
    else {
        listItem =<li>not DOne : {prof} time {displayTIme}</li>;
    };
    return listItem;
}