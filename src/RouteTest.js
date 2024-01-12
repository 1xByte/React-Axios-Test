import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import { Nav } from './Nav'

export const RouteTest = () => {
  return (

    <>
        <Routes>
            <Route path='/' element={<Home/> }/>

            <Route path='About' element={<About/> }/>
            <Route path='Nav' element={<Nav/> }/>
        </Routes>
    </>

    )
}
