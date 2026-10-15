import { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>

const Input = ({text, value, onChange}) => (
  <div>
    {text} <input value={value} onChange={onChange}/>
  </div>
)

const Form = ({persons, setPersons}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat({ name: newName, number: newNumber}))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <form>
      <Input text='name:' value={newName} onChange={handleNameChange}/>
      <Input text='number:' value={newNumber} onChange={handleNumberChange}/>
      <div>
        <button type="submit" onClick={addName}>add</button>
      </div>
    </form>
  )
}

const Persons = ({persons, newFilter}) =>
  <div>{
    persons.filter(
        (person) => person.name.toLowerCase().includes(newFilter.toLowerCase())
      ).map(
        (person) => <div key={person.name}>{person.name} {person.number}</div>
      )}
  </div>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newFilter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Header text='Phonebook'/>
      <Input text='filter shown with' value={newFilter} onChange={handleFilterChange}/>
      <Header text='add a new'/>
      <Form persons={persons} setPersons={setPersons}/>
      <Header text='Numbers'/>
      <Persons persons={persons} newFilter={newFilter}/>
    </div>
  )
}

export default App