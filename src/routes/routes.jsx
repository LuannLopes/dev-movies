import { Routes, Route } from 'react-router-dom'

import Detail from '../containers/Detail'
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
        <Route path="/detalhe/:id" element={<Detail />} />
      </Route>
    </Routes>
  )
}

export default Router
