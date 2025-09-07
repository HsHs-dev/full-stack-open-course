import { useState } from 'react'
import Name from './components/Name'


const App = () => {
  
  const [persons, setPersons] = useState([
    {name: 'Hassan Siddig'}
  ])

  const [newName, setNewName] = useState('')


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {

    event.preventDefault()

    const personObject = {
      name: String(newName)
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Name key={person.name} name={person.name} />
      )}
    </div>
  )

}


export default App