const SearchField = ({filterName, handler}) => {
    return(
        <div>
            filter shown with <input value={filterName} onChange={handler}/>
        </div>
    )
};

export default SearchField;