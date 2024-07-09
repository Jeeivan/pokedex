import { Routes, Route } from "react-router-dom"
import NotFound from "./NotFound/NotFound"
import Layout from "./Layout/Layout"
import Welcome from "./Pages/Welcome"
import ErrorPage from "./Components/ErrorPage"
import FetchPokemon from "./Pages/Pokemon"

function App() {

  return (
    <main>
      <Routes>
        <Route path='*' element={<NotFound />} errorElement={<ErrorPage/>}/>
        <Route path='/' element={<Layout />} errorElement={<ErrorPage/>}>
          <Route path='/' element={<Welcome />} errorElement={<ErrorPage/>}/>
          <Route path='/pokemon' element={<FetchPokemon />} errorElement={<ErrorPage/>}/>
        </Route>

        
      </Routes>
    </main>
  )
}

export default App
