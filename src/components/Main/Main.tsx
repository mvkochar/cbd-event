import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages'

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
    </Routes>
  )
}

export default Main