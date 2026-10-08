import { useState } from "react";

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }
    return (

        <>
            <h3>Player bangla: Batsman</h3>
            <p>total Six: {sixes}</p>
            {
                runs > 50 && <p>your score : 50</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour} >Four</button>
            <button onClick={handleSix}>Six</button>
            <br /><br />
        </>


    );

}