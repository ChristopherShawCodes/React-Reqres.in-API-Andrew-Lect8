import {useState,useEffect} from 'react'
import './App.css';

function App() {

const [state,setState] = useState([])

  useEffect(()=>{
    fetch('https://reqres.in/api/users')
    .then((result)=>{
      return result.json()
    }).then((res)=>{
      console.log(res)
      setState(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  } , [])

  return (
    <div className="App">
    <div className='Header'>
      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <span class="navbar-text">
            React//Marn Stack Lecture 8
          </span>
    <a href='https://reqres.in/'>reqres.in</a>
        </div>
      </nav>
    </div>
    {
      state.map((person)=>{
        return<div className='avatar'>
        <img src={person.avatar}/>
        <div className='card-contents'>
          <h1>{person.first_name} {person.last_name}</h1>
          <p>{person.email}</p>
        </div>
        </div>
      })
    }
    </div>
  );
}

export default App;
