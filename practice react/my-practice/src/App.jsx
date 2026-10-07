import My from './My';
import Actor from './Actor';
import Singer from './Singer';
import './App.css';
import Library from './Library';

export default function App(){
  // protttek upadan k cai
  // map protek ta upadan a loop calabe and kicu korbe

  const actors=['sani','anas','sandy','alex'];
  const singers=[
    {id:1, name:'dr mahfuj',age:89},
    {id:2, name:'tahsan',age:49},
    {id:3, name:'shubro',age:57},
  ];



  const books=[
    {id:1,name:'physics', price:250},
    {id:2,name:'chemistry', price:50},
    {id:3,name:'biology', price:230},
  ]
  return (<>
    <h3>THis is my practice</h3>
    <Library books={books}></Library>
    
    
    {
      singers.map(singer=> <Singer key={singer.id} singer={singer}></Singer>)
    }
    {
      // actors.map(actor =><Actor  actor={actor}></Actor>)
      

    }
   {/* 
    <My name='shahriar' prof='developer' isDone={false}/>
    <My name='naiem' prof='my' isDone={false}/>
    <My name='shahriar' prof='react dev' isDone={true}/> */}
  </>);
}

// function Person({name,dev}){
//   return (<>

//     <h3>Person name {name}</h3>
//     <h3>Person name {dev}</h3>
  
//   </>);
// }