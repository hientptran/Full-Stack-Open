import { useState } from 'react'

const Statistics = (props) => {
  if (props.all > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <StatisticsLine text='good' value={props.good}></StatisticsLine>
        <StatisticsLine text='neutral' value={props.neutral}></StatisticsLine>
        <StatisticsLine text='bad' value={props.bad}></StatisticsLine>
        <StatisticsLine text='all' value={props.all}></StatisticsLine>
        <StatisticsLine text='average' value={props.score / props.all}></StatisticsLine>
        <StatisticsLine text='positive' value={(props.good / props.all) * 100} unit='%'></StatisticsLine>
      </div>
    )
  } else return (
    <div>
      <h1>statistics</h1> 
    <p>No feedback given</p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handle}>{props.text}</button>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.unit}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const [score, setScore] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setScore(score + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setScore(score + 0)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setScore(score - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handle={handleGood} text='good'/>
      <Button handle={handleNeutral} text='neutral'/>
      <Button handle={handleBad} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} score={score} />
    </div>
  )
}

export default App