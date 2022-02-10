import myTeamArr from "./myTeamArr";



const MyTeam = ({myPokemonTeam}) => {
    console.log(myPokemonTeam);
    let pokeTeam = myPokemonTeam.map((item, index) =>{
        return (
            <div key={index}>
                {item.name}
                <img src={item.image} />
            </div>
            )
    });
    return <div>{pokeTeam}</div>
    
}

export default MyTeam; 
