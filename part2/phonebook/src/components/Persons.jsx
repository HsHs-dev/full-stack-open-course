
const Persons = ({persons, filter, removePerson}) => {

  const filtered = () => {
    return persons.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    )
  }

  const displayedPersons = filter.trim().length === 0 ? persons : filtered()

  return (
    <div>
      {displayedPersons.map(person => (
          <div key={person.id}>
            <span>{person.name} {person.number} </span>
            <button onClick={() => removePerson(person.id)}>delete</button>
          </div>
     ))}
    </div>
  )
}


export default Persons