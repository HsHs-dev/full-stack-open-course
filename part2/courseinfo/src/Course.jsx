const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => <h2>{props.course}</h2>

const Content = (props) => {

  return (
    <div>
      {props.parts.map((part) => <Part key={part.id} part={part} />)}
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

export default Course