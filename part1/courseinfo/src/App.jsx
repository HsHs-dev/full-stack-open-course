const App = () => {
  const parts = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14} 
  ]
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts.map(p => p.exercise)} />
    </div>
  )
}

const Header = (props) => {
  return (
      <h1>
        {props.course}
      </h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].part} exercise={props.parts[0].exercise} />
      <Part part={props.parts[1].part} exercise={props.parts[1].exercise} />
      <Part part={props.parts[2].part} exercise={props.parts[2].exercise} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part}{props.exercise}
    </p>
  )
}

const Total = ({exercises}) => {
  const total = exercises.reduce((sum, num) => sum + num, 0)
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

export default App