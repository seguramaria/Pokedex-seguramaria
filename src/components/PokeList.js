import React from 'react';
import '../index.scss';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const pokemons = props.pokemons.map((pokemon, index) => {
    return (
      <li className="card " key={index}>
        <Pokemon name={pokemon.name} types={pokemon.types} url={pokemon.url} />
              
      </li>
    );
  });

  return <ul className="cards">{pokemons}</ul>;
};

export default PokeList;
