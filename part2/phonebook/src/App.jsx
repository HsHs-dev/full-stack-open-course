import { useState } from 'react'
import Name from './components/Name'


const App = () => {
  
  const [persons, setPersons] = useState([
    {name: 'Hassan Siddig', number: '0115473981'}
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, SetNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    SetNewNumber(event.target.value)
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
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}  />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Name key={person.name} name={person.name} number={person.number} />
      )}
    </div>
  )

}


export default App