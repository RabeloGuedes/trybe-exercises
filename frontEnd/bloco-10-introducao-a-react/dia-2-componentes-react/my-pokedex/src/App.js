import './App.css';
import Pokemon from './pokemon'

function App() {
  return (
    <section>
      <h1> Podex </h1>
      <div className="all-pokemons">
        <Pokemon/>
      </div>
    </section>
  );
}

export default App;
