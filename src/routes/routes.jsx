import { Routes, Route } from 'react-router-dom'

import Home from '../containers/Home'
import DefaultLayout from '../layout/DefaultLayout'
import Movies from './../containers/Movies'
import Series from './../containers/Series'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Route>
    </Routes>
  )
}

export default Router
