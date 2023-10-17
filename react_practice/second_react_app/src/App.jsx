import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Character from './components/character/character';

function App() {
  const [characters, setCaracters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then((res) => {
      setCaracters(res.data.results);
      setLoading(false);
    })
  }, [])

  if(loading){
    return <h1>Loading....</h1>
  }

  return (
    <>
      <div className='characters'>
        {characters.map(({id, name, image, status}) => {
          return (
            <Character 
              key={id}
              name={name}
              image={image}
              status={status}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
