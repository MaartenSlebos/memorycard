import { useState, useEffect } from 'react'; 

async function fetchPokemon(num) {
  const url = `https://pokeapi.co/api/v2/pokemon/${num}`
  const response = await fetch(url); 
  const data = await response.json(); 
  console.log(data); 
  return data; 
}

function App() {
  const [pokemon, setPokemon] = useState(null); 

  useEffect(() => {
    fetchPokemon(1).then(data => setPokemon(data)); 
  }, []); 
  console.log(pokemon); 

  return (
    <>
      <h1>Pokemon</h1>
      {pokemon ? <h2>{pokemon.name}</h2> : <h2>Loading...</h2>}
    </>
  )
}

export default App; 

