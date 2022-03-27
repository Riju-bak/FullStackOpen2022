const Anecdote = (props) => {
    const heading = props.heading;
    const text = props.text;
    const votes = props.votes;
    return (
        <div>
            <h1>{heading}</h1>
            <p>{text}</p>
            <p>has {votes} votes</p>
        </div>
    );
};

export default Anecdote;