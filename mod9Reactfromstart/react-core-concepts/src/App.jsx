
import './App.css'
import Batsman from './Batsman';
import Bowler from './Bowler';
import Counter from './Counter';

function App() {

  function Click1() {
    alert("User click 1");
  }
  const Click4 = () => {
    alert("click 4 arro func");
  }
  const add5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>

      <h3>React Core Concept</h3>

      <Counter></Counter>

      <Batsman></Batsman>


      <Bowler></Bowler>
      <button onClick={Click1}>Click1</button>
      <button onClick={function Click2() { alert("clicked 2") }}>Click2</button>
      <button onClick={() => alert("user click 3")}>Click3</button>
      <button onClick={Click4}>CLick4</button>
      <button onClick={()=>add5(10)}>CLick5</button>

    </>
  )
}

export default App;