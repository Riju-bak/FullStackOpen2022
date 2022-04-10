const AddPersonForm = (props) => {
    const handler = props.handler;
    const placeHolderName = props.placeHolderName;
    const placeHolderNumber = props.placeHolderNumber;
    const placeHolderNameHandler = props.placeHolderNameHandler;
    const placeHolderNumberHandler = props.placeHolderNumberHandler;
    return (
        <form onSubmit={handler}>
            <div>
                name: <input value={placeHolderName} onChange={placeHolderNameHandler}/>
            </div>
            <div>
                number: <input value={placeHolderNumber} onChange={placeHolderNumberHandler}/>
            </div>
            <div>
                <button type={"submit"}>add</button>
            </div>
        </form>
    );
};

export default AddPersonForm;