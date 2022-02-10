import React, { useState, useEffect } from 'react';
import SinglePokemon from '../SinglePokemon/SinglePokemon';


function AllPokeMon({handleAddPokemonTeam}) {
    const [pokeName, setPokeName] = useState([]);
    const [pickPokemon, setPickPokemon] = useState('bulbasaur');
    const pokeUrl = "https://pokeapi.co/api/v2/pokemon/?limit=874";

    useEffect(() => {

        fetch(pokeUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPokeName(data.results);
            });
    }, []);

    const handlePokemonClick = (name) => {
        setPickPokemon(name);
    }

    let list = pokeName.map((item, index) => {
        
        return (
            <div className="pokeNames" key={index}>
                <p onClick={() => {handlePokemonClick(item.name)}}>
                    {item.name}
                </p>
            </div>
        );
    })

    return <div>
            <SinglePokemon handleAddPokemonTeam={handleAddPokemonTeam} name={pickPokemon}/>
            {list}
            
    
           </div>



}

export default AllPokeMon; 