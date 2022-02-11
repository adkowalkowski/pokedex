import { useEffect, useState } from "react";
import myTeamArr from "../MyTeam/MyTeam";
import MyTeam from "../MyTeam/MyTeam";

function SinglePokemon(props) {
    const [singlePokemon, setSinglePokemon] = useState({})

    const singlePokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

    useEffect(() => {

        fetch(`${singlePokemonUrl}${props.name}`)
            .then((res) => res.json())
            .then((data) => {
                setSinglePokemon(data);
            });
    }, [props.name]);


    let singlePokemonCard = "";
    if (singlePokemon.name) {
    singlePokemonCard = (
      <div>
        <img src={singlePokemon.sprites.front_default} />
        <img src={singlePokemon.sprites.front_shiny} />
        <h3>{singlePokemon.name}</h3>
        <p>Height: {singlePokemon.height} </p>
        <p>Weight: {singlePokemon.weight} </p>
        <button onClick={()=>props.handleAddPokemonTeam(singlePokemon.name, singlePokemon.sprites.front_default)}>Add to team</button>
      </div>
    );
  }

  return <div className="singlePokemon">{singlePokemonCard}</div>

   
}
    
    
   

export default SinglePokemon; 