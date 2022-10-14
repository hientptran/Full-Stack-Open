import { useState } from 'react'

const Ranking = (props) => {
  const max = Math.max(...props.points)
  const imax = props.points.indexOf(max)
  const winner = props.anecdotes[imax]
  if (max === 0) {
    return (
      <p>No votes yet</p>
    )
  }

  return (
    <div>
      <p>{winner}</p>
      <p>has {max} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(7).fill(0))

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const randomize = () => {
    const min = Math.ceil(0);
    const max = Math.floor(anecdotes.length - 1);
    setSelected(Math.floor(Math.random() * (max - min) + min))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={(vote)}>vote</button>
      <button onClick={(randomize)}>next anecdote</button>
      <Ranking anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App