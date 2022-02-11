
const MyTeam = ({myPokemonTeam, removeTeam}) => {
    console.log(myPokemonTeam);
    let pokeTeam = myPokemonTeam.map((item, index) =>{
        return (
            <div key={index}>
                {item.name}
                <img src={item.image} />
                <button onClick={(()=>removeTeam(item))}>Remove from team</button>
            </div>
            )
    });
    return <div>{pokeTeam}</div>
    
}

export default MyTeam; 
