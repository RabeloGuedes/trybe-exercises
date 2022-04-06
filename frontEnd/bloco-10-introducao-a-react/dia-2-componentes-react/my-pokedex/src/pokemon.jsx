import React from 'react';
import pokemons from './data';
import './pokemon.css'

class Pokemon extends React.Component {
  render () {
    return pokemons.map((pokemon) => (
        <div key= {pokemon.id} className="pokemon">
          <h2> { pokemon.name }</h2>
          <p> {pokemon.type} </p>
          <p> {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}  </p>
          <img src= { pokemon.image} alt= { pokemon.name } />
        </div>
    ))
  }
}

export default Pokemon;