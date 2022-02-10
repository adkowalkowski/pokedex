import './App.css'
import AllPokeMon from '../AllPokeMon/AllPokeMon';
import SinglePokemon from '../SinglePokemon/SinglePokemon';
import MyTeam from '../MyTeam/MyTeam';
import { Route, Link, Routes } from "react-router-dom";
import { useState } from 'react';



function App() {

  const [myPokemonTeam, setMyPokemonTeam] = useState([]);
  
  const handleAddPokemonTeam = (name, image) => {
    const addToTeam = [...myPokemonTeam]
    addToTeam.push({name, image});
    setMyPokemonTeam(addToTeam);
  }
  console.log(myPokemonTeam);


  return (
    <div className="App">
        <nav>
        <Link to="/">
          <h1>Pokédex</h1>
        </Link>
        <Link to="/team">
          My Team
        </Link>
        </nav>
        <main>

        <Routes>
          <Route path='/' element={<AllPokeMon handleAddPokemonTeam={handleAddPokemonTeam}/>} />
          <Route path='/team' element={<MyTeam myPokemonTeam={myPokemonTeam}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
