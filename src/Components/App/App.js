import './App.css'
import AllPokeMon from '../AllPokeMon/AllPokeMon';
import SinglePokemon from '../SinglePokemon/SinglePokemon';
import MyTeam from '../MyTeam/MyTeam';
import { Route, Link, Routes } from "react-router-dom";
import { useState } from 'react';



function App() {

  const [myPokemonTeam, setMyPokemonTeam] = useState([]);
  
  const handleAddPokemonTeam = (name, image) => {
    if (myPokemonTeam.length < 6) {
      const addToTeam = [...myPokemonTeam]
      addToTeam.push({name, image});
      setMyPokemonTeam(addToTeam);
    } else
    console.log("Team is full");
  }

  const removeTeam = (object) => {
    const newTeam = [...myPokemonTeam]
    let filteredTeam = newTeam.filter((item) => item !== object);
    // console.log(name);
    setMyPokemonTeam(filteredTeam);
  }

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
          <Route path='/team' element={<MyTeam myPokemonTeam={myPokemonTeam} removeTeam={removeTeam}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
