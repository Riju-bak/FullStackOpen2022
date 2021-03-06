import { useState } from 'react'
import Button from "./Button";
import Anecdote from "./Anecdote";

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));
    const [mostVoted, setMostVoted] = useState(0);

    const getRandomInt = (max) => {
        // Returns random integer from 0 to max(inclusive of 0, but not max)
        return Math.floor(Math.random()*max);
    };

    const handleNextAnecdote = () => {
        const rand_ind = getRandomInt(anecdotes.length);
        setSelected(rand_ind);
    };

    const handleVotes = () => {
        let points = [...votes];
        points[selected]++;
        setVotes(points);
        const maxPoints = Math.max(...points);
        setMostVoted(points.indexOf(maxPoints));
    };

    return (
        <div>
            <Anecdote heading={"Anecdote of the day"} text={anecdotes[selected]} votes={votes[selected]}/>
            <Button onClick={handleVotes} text={"votes"}/>
            <Button onClick={handleNextAnecdote} text={"next anecdote"}/>
            <Anecdote heading={"Anecdote with most votes"} text={anecdotes[mostVoted]} votes={votes[mostVoted]}/>
        </div>
    )
}

export default App