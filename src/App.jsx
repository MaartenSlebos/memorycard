import { useState, useEffect } from 'react'; 
import Card from './components/Card'; 
import './App.css';

async function fetchPokemon(num) {
  const url = `https://pokeapi.co/api/v2/pokemon/${num}`
  const response = await fetch(url); 
  const data = await response.json(); 
  return data; 
}

function App() {
  const [pokemons, setPokemons] = useState([]); 

  useEffect(() => {
    const promises = Array.from({ length: 12 }, (_, i) => 
      fetchPokemon(i * 5 + 1)
    );

    Promise.all(promises)
      .then(results => setPokemons(results));
  }, []); 

  return (
    <>
      <h1>Pokemon Memory</h1>
      <Card pokemons={pokemons} />
    </>
  )
}

export default App; 

