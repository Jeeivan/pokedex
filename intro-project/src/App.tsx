import { Routes, Route } from "react-router-dom"
import NotFound from "./NotFound/NotFound"
import Layout from "./Layout/Layout"
import Welcome from "./Welcome/Welcome"
import ErrorPage from "./ErrorPage/ErrorPage"

function App() {

  return (
    <main>
      <Routes>
        <Route path='*' element={<NotFound />} errorElement={<ErrorPage/>}/>
        <Route path='/' element={<Layout />} errorElement={<ErrorPage/>}>
          <Route path='/' element={<Welcome />} errorElement={<ErrorPage/>}/>
          <Route path='/test' element={<NotFound />} errorElement={<ErrorPage/>}/>
        </Route>

        
      </Routes>
    </main>
  )
}

export default App
