import './App.css';

export default function Singer({singer}){
    console.log(singer)
    return (

        <div className='singer'>
            <h3>name: {singer.name}</h3>
            <h3>age: {singer.age}</h3>
        </div>
    );
}