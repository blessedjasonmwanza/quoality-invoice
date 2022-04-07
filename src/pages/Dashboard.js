import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LeftNav from '../components/LeftNav'
import New from '../components/New'
import Overdue from '../components/Overdue'
import Paid from '../components/Paid'
import Settings from '../components/Settings'
import TopNav from '../components/TopNav'
import Unpaid from '../components/Unpaid'

export default function Dashboard() {
  return (
    <>
      <TopNav />
      <LeftNav />
      <main>
        <Routes>
          <Route path="/new"  element={<New />} />
          <Route path="/paid"  element={<Paid />} />
          <Route path="/overdue"  element={<Overdue />} />
          <Route path="/unpaid"  element={<Unpaid />} />
          <Route path="/settings"  element={<Settings />} />
        </Routes>
      </main>
    </>
  )
}
