import React from 'react';
import '../index.scss';
import PokeList from './PokeList';
import pokemonsFromApi from '../data/pokemons.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemonsFromApi,
    };
  }

  render() {
    return (
      <div className="page">
        <h1 className="title">
          ¡HAZTE CON TODOS!
          <img
            className="pokeball"
            src="https://i.ebayimg.com/images/g/CLAAAOxyRhBSq3b5/s-l300.jpg"
            alt="Pokeball"
          ></img>
        </h1>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
