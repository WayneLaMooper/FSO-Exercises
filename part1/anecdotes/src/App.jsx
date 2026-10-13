import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) =>
  <>
    <button onClick={onClick}>
      {text}
    </button>
  </>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [most, setMost] = useState(0)

  const handle_anecdotes = () => setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))

  const handle_votes = () => {
    const copy = [...votes]
    copy[selected] += 1

    if (copy[selected] > copy[most]) {
      setMost(selected)
    }

    setVotes(copy)
  }

  return (
    <div>
      <Header text='Anecdote of the day'/>
      {anecdotes[selected]}
      <br/>
      has {votes[selected]} votes
      <br/>
      <Button onClick={handle_anecdotes} text='next anecdote'/>
      <Button onClick={handle_votes} text='vote' />
      <Header text='Anecdote with most votes' />
      {anecdotes[most]}
    </div>
  )
}

export default App