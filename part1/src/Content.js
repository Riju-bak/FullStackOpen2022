import Part from './Part';

const Content = (props) => {
    let pl = props.l;
    return (
        <div>
            <Part pr={pl[0]}/>
            <Part pr={pl[1]}/>
            <Part pr={pl[2]}/>
        </div>
    )
};

export default Content;