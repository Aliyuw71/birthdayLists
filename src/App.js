import './App.css';
import data from './data'
import BirthdayList from './BirthdayList';
import {useState} from 'react'

function App() {
  const[people, setPeople] = useState(data)
  return (
    <div className="App">
      <h3 className='header'>{people.length} {(people.length > 1)? <span>birthdays</span>: <span>birthday</span>} today</h3>
      <BirthdayList 
        people = {people}
        setPeople = {setPeople}
      />
    </div>
  );
}

export default App;
