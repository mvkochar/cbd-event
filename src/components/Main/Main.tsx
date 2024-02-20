import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Home, Services } from '../../pages'

type MainProps = {
  handlePage: (pageNum: number) => void
} 

const Main = ({handlePage}: MainProps) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home handlePage={handlePage}/>} 
      />
      <Route 
        path='about'
        element={<About handlePage={handlePage} />}
      />
      <Route
        path='services'
        element={<Services handlePage={handlePage}/>}
      />
    </Routes>
  )
}

export default Main