
const Persons = ({persons, filter}) => {

  const filtered = () => {
    return persons.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    )
  }

  const displayedPersons = filter.trim().length === 0 ? persons : filtered()

  return (
    <div>
      {displayedPersons.map(person => (
        <p key={person.name}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}


export default Persons