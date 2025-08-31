const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
      <Total parts={course.parts} />
    </div>
  )}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {

  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
  
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Total = (props) => {
  const total = props.parts
  return (
    <strong>
      total of {total.reduce((sum, part) => sum + part.exercises, 0)} exercises
    </strong>
  )
}

export default App