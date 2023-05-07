import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './components/Pagination';

function App() {

  const onPageChange = (page) => {
    console.log("componente padre: ", page)
  }

  return (
    <div className="App">
      <Pagination total={65} page={3} itemsPerPage={10} onChange={onPageChange}/>
    </div>
  );
}

export default App;
