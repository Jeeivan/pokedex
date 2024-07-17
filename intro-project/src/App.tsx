import { Routes, Route } from "react-router-dom"
import NotFound from "./NotFound/NotFound"
import Layout from "./Layout/Layout"
import Welcome from "./Pages/Welcome"
import ErrorPage from "./Components/ErrorPage"
import FetchPokemon from "./Pages/Pokemon"
import SinglePokemon from "./Pages/SinglePokemon/SinglePokemon"
import PokemonList from "./Pages/PokemonList"

function App() {

  return (
    <main>
      <Routes>
        <Route path='*' element={<NotFound />} errorElement={<ErrorPage/>}/>
        <Route path='/' element={<Layout />} errorElement={<ErrorPage/>}>
          <Route index element={<Welcome />} errorElement={<ErrorPage/>}/>
          <Route path='/pokemonlist' element={<PokemonList />} errorElement={<ErrorPage/>}/>
          <Route path='/pokemon' element={<FetchPokemon />} errorElement={<ErrorPage/>}/>
          <Route path='/singlepokemon/:name' element={<SinglePokemon />} errorElement={<ErrorPage/>}/>
        </Route>        
      </Routes>
    </main>
  )
}

export default App
