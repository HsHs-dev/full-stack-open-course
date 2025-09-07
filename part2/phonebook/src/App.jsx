import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  
  const [persons, setPersons] = useState([
    {name: 'Hassan Siddig', number: '0115473981'}
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, SetNewNumber] = useState('')

  const [search, setSearch] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    SetNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const addPerson = (event) => {

    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
    }

    setNewName('')
    SetNewNumber('')
  }



  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} handleSearchChange={handleSearchChange} />

      <h3>add a new</h3>
        <PersonForm 
          name={newName} number={newNumber} 
          handleNameChange={handleNameChange}
          handleNumbreChange={handleNumberChange}
          addPerson={addPerson}
        />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={search} />
    </div>
  )

}


export default App