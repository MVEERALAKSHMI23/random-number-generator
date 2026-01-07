import {useState} from "react";
function RandomNumberGenerator()
{
    const [number,setNumber]=useState(null);
    const generateRandomNumber=()=> {
        const newNumber=Math.floor(Math.random()*100)+1;
        setNumber(newNumber);

    }

return(
    <div className="container">
        <h1>Random Number Generator</h1>
        <p className="number">
            {number===null?"no number generated yet":number}
        </p>
<button className="generate-btn" onClick={generateRandomNumber}>Generate Random Number</button>


    </div>
);

}

export default RandomNumberGenerator;
