const StatisticLine = ({text, value}) => {
    return (<tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>);
};

const Statistics = ({good, bad, neutral}) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (<p>No feedback given</p>);
    }
    const all = good + bad + neutral;
    const average = (good - bad) / all;
    const positive = good / all * 100;
    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                <StatisticLine text={"good"} value={good}/>
                <StatisticLine text={"neutral"} value={neutral}/>
                <StatisticLine text={"bad"} value={bad}/>
                <StatisticLine text={"all"} value={all}/>
                <StatisticLine text={"average"} value={average}/>
                <StatisticLine text={"positive"} value={positive}/>
                </tbody>
            </table>
        </div>
    );
};

export default Statistics;