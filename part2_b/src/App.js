import {useState} from "react";
import SearchField from "./components/SearchField";
import AddPersonForm from "./components/AddPersonForm";
import Persons from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellranger', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filterName, setFilterName] = useState('');

    const personsToShow = filterName.length === 0 ? persons : persons.filter(person => person.name.includes(filterName));

    const handleNewName = (event) => {
        setNewName(event.target.value);
    };

    const handleNewNumber = (event) => {
        setNewNumber(event.target.value);
    };

    const handleFilterName = (event) => {
        setFilterName(event.target.value);
    }

    const addNewPerson = (event) => {
        event.preventDefault();
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} already in the phonebook.`);
            return;
        }
        const personObject = {
            id: persons.length + 1,
            name: newName,
            number: newNumber
        };
        setPersons(persons.concat(personObject));
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <SearchField filterName={filterName} handler={handleFilterName}/>
            <h2>add a new</h2>
            <AddPersonForm
                placeHolderName={newName}  placeHolderNameHandler={handleNewName}
                placeHolderNumber={newNumber} placeHolderNumberHandler={handleNewNumber}
                handler = {addNewPerson}
            />
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow}/>
        </div>
    );
}

export default App;
