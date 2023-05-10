import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './components/Pagination';
import { useEffect, useState } from 'react';

function App() {

  const [id, setId] = useState(1);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [id])

  const onPageChange = (page) => {
    setId(page);
    console.log(pokemon);
  }

  return (
    <div className="App">
      {pokemon.name ? <h1>{pokemon.name}</h1> : null}

      {pokemon.sprites ? (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} key={pokemon.id} />
      ) : null}

      <Pagination
        total={150}
        page={id}
        itemsPerPage={3}
        onChange={onPageChange}
      />
    </div>
  );
}

export default App;

