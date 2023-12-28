import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UI from './UI'
export default function index() {
  return (
    <Routes >
        <Route path='/ui' element={<UI />} />
    </Routes>
  )
}
