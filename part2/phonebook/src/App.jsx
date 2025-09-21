import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, SetNewNumber] = useState('')

  const [search, setSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    SetNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => { setSearch(event.target.value)
  }

  const addPerson = (event) => {

    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    const existing = persons.find(p => p.name === newName)

    if (existing) {
      if (existing.number === newNumber) {
        alert(`${newName} is already added to phonebook`)
      } else if (confirm(
      `${newName} is already in the phonebook, replace the old number with a new one?`)) {
        personService
          .update(existing.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id === existing.id ? returnedPerson : p))
          })
      }
    } else {
      personService
       .create(personObject)
       .then(newPerson => {
         setPersons(persons.concat(newPerson))
       })
    }

    setNewName('')
    SetNewNumber('')
  }

  const removePerson = id => {
    const person = persons.find(p => p.id === id)
    if (confirm(`Delete ${person.name} ?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          alert(`${person.name} has already being removed from the server`)
          setPersons(persons.filter(p => p.id !== id))
        })
    }
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
      <Persons persons={persons} filter={search} removePerson={removePerson}/>
    </div>
  )

}


export default App