import MainGrid from './components/MainGrid';
import FilterGrid from './components/FilterGrid';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="main">
      <MainGrid />
      <FilterGrid />
    </div>
  );
}

export default App;
