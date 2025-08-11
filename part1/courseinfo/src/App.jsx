const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {part: 'Fundamentals of React', exercises: 10},
      {part: 'Using props to pass data', exercises: 7},
      {part: 'State of a component', exercises: 14} 
    ]
 }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
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
      <Part part={props.parts[0].part} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].part} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].part} exercise={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  const exercises = props.parts.map(p => p.exercises)
  const total = exercises.reduce((sum, num) => sum + num, 0)
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

export default App