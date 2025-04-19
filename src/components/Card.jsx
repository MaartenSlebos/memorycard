function Card({ pokemons }) {
    return (
        <div>
            {pokemons.length > 0 
                ? pokemons.map(pokemon => (
                    <div key={pokemon.id}>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                ))
                : <h2>Loading...</h2>
            }
        </div>
    );
}

export default Card


