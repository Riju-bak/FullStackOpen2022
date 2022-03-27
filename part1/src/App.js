import {useState} from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGood = () => {
        setGood(good+1);
    };

    const handleNeutral = () => {
        setNeutral(neutral+1);
    };

    const handleBad = () => {
        setBad(bad+1);
    }

    return (
        <>
            <h1>give feedback</h1>
            <Button onClick={handleGood} text={"good"}/>
            <Button onClick={handleNeutral} text={"neutral"}/>
            <Button onClick={handleBad} text={"bad"}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </>
    );
};

export default App;
