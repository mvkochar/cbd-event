import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Cost, Home, Portfolio, Services } from '../../pages'

type MainProps = {
  handlePage: (pageNum: number) => void
}

const Main = ({ handlePage }: MainProps) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home handlePage={handlePage} />}
      />
      <Route
        path='about'
        element={<About handlePage={handlePage} />}
      />
      <Route
        path='services'
        element={<Services handlePage={handlePage} />}
      />
      <Route
        path='portfolio'
        element={<Portfolio handlePage={handlePage} />}
      />
      <Route
        path='cost'
        element={<Cost handlePage={handlePage} />}
        errorElement={<h4>Page not exist</h4>}
      />
    </Routes>
  )
}

export default Main