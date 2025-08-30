import { useState } from 'react'

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incGood = () => setGood(good + 1)
  const incNeutral = () => setNeutral(neutral + 1)
  const incBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback 😀</h1>

      <Button onClick={incGood} text="good"/>
      <Button onClick={incNeutral} text="neutral"/>
      <Button onClick={incBad} text="bad"/>

      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )

}

const Button = props => <button onClick={props.onClick}>{props.text}</button>

export default App