import { useState } from "react";

export default function Bowler() {
    const [bowl, setBowl] = useState(0);
    function bowlerFunc() {
        const newBowl = bowl + 1;
        setBowl(newBowl);
    }







    const setStyele = {
        border: "2px solid red",
        padding: "10px",
        margin: '10px'
    }

    return (
        <>
            <div style={setStyele}>
                <h3>
                    Bowler counter
                </h3>
                <button onClick={bowlerFunc}>Bowler count</button>
                { bowl==6 && <p>This is Over now come next bowler</p>}
               
                <p>total bowl:  {bowl}</p>


            </div>
        </>

    );
}