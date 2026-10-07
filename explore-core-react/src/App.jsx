import './App.css'
import Todo from './Todo';
function App() {

  const time=50;
  return (
    <>
    <h2>this is app .jsx</h2>
      <Todo task="learn react" isDone={true} time={time}></Todo>
      <Todo task="learn laravel" isDone={true}  time={'100'}></Todo>
      <Todo task="learn php" isDone={false} time={'100'}></Todo>
      </>
    // <div className="App">
    //   <h1>Welcome to React</h1>
    //   <p>This is a simple React application.</p>
    //   <Person id={1} name="Shahriar" />
    //   <Person id={2} name="Rafi" />
    //   <Person id={3} name="Naiem" />
    //   <Player name="John Doe" description="A skilled football player." />
    //   <Player name="rafi Doe" description="A skilled cricketer." />
    // </div>
  );
}
function Person(props) {
  const person2 = {
    color: "white ",
    backgroundColor: "gray",
  }
  return (
    <div className="Person" style={person2}>
      <h2 style={{ color: "white" }}>Id: {props.id}</h2>
      <p>Name: {props.name}</p>
    </div>
  );
}

function Player({ name, description }) {
  const person2 = {
    color: "white ",
    backgroundColor: "gray",
  }
  return (
    <div className="Person" style={person2}>
      <h2 style={{ color: "white" }}>Player Name: {name}</h2>
      <p>Player Description: {description}s</p>
    </div>
  );
}
export default App;