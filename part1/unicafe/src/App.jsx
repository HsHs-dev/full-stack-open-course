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
  const average = (good - bad) / total
  const positive = good / total * 100

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="netural" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
 )
}

const StatisticLine = ({text, value}) => {

  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )

}

export default App