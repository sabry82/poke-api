import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';

function App() {

  const onPageChange = (page) => {
    console.log("componente padre: ", page)
    setPage(page);
  }

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  const getEndpoint = (pagina) => {
    return `https://pokeapi.co/api/v2/ability/?limit=20&offset=${pagina}`;
  }

  useEffect(() => {
    fetch(getEndpoint(page))
      .then(response => response.json())
      .then(data => {
        setTotal(data.count);
        setPokemons(data.results);
      })
  }, [page]);

  return (
    <div className="App">
      {total}
      {pokemons && pokemons.map((p, i) => (
        <p key={i}>{p.name}</p>
      ))}

      <Pagination total={total} page={page} itemsPerPage={20} onChange={onPageChange} />
    </div>
  );
}

export default App;
