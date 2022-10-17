// Everything this lecture covers
// Set up useEffect to run a side effect as soon as the component runs
// use fetch to request data via an API
// Handle promise the async request makes
// Upon success we convert to JSON
// Then we set this data into STATE
// in the return statement we MAP through STATE
// Rendered the DATA for each OBJECT

//------------------------------------------------------------------
import {useState,useEffect} from 'react'
import './App.css';

function App() {


  const [state,setState] = useState([])

  //Fetch the data
  //Convert to JSON to display the data
  //setState
  //Map

  useEffect(()=>{
    // console.log('Running our useEffect!')
    fetch('https://reqres.in/api/users')
  //then & catch both take in call back functions
  //result & error are superficial. Provide name suitable for context.
    .then((result)=>{
      // console.log(result)
      //JSON JavaScript Object Notation
      //json will return this in a form we can read
      return result.json()
    }).then((res)=>{
      console.log(res)
      setState(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  } , [])
  //dependency array tells useEffect to run on first render
  //avoiding an infinite loop

  return (
    <div className="App">
    {
      state.map((person)=>{
        <div>
          <h1>{person.first_name}</h1>
        </div>
      })
    }
    </div>
  );
}

export default App;
