
const PersonForm = ({name, number, handleNameChange, handleNumbreChange, addPerson}) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        name: <input value={name} onChange={handleNameChange} />
        <br></br>
        number: <input value={number} onChange={handleNumbreChange} />
        <button type="submit">add</button>
      </form>
    </div>
  )
}


export default PersonForm