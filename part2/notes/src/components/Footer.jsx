
const Footer = () => {
  const footerStyle = {
    color: '#70c1b3',
    fontStyle: 'italic'
  }


  return (
    <div style={footerStyle}>
      <br/>
      <p>
        Note app, Department of <span style={{fontWeight: "bold", color: "#ef476f"}}>Computer Science</span>, University of Helsinki 2025
      </p>
    </div>
  )

}

export default Footer