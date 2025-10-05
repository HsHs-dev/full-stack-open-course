const SearchBar = ({ value, onChange }) => {
  return (
    <label>
      find countries 
      <input 
        value={value} 
        onChange={onChange}
        placeholder="Search by name..."
        style={{marginLeft: 4}}
      />
    </label>
  )
}

export default SearchBar