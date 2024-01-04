import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Courses from './components/Courses'
import Course from './components/Course'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Sidebar />

          
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="courses" element={<Courses />} />
              <Route path="course" element={<Course />} />
              <Route path="*" element={<section><p className="heading">Page not found.</p></section>} />
            </Routes>
          
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;