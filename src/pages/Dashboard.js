import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LeftNav from '../components/LeftNav'
import New from '../components/New'
import TopNav from '../components/TopNav'

export default function Dashboard() {
  return (
    <>
      <TopNav />
      <LeftNav />
      <main>
        <Routes>
          <Route path="/new"  element={<New />} />
        </Routes>
      </main>
    </>
  )
}
