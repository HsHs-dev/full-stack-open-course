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
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )

}

const Button = props => <button onClick={props.onClick}>{props.text}</button>

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : good / total * 100

  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
 )
}

export default App