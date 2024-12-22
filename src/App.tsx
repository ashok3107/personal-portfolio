import { useState } from 'react';
import SideNav from './components/SideNav/SideNav';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './App.css'
import About from './components/About/About';
import styles from './App.module.scss';
import WorkExperience from './containers/WorkExperience/WorkExperience';
import Education from './containers/Education/Education';
import Portfolio from './containers/Portfolio/Portfolio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className={styles.appContainer}>
        <BrowserRouter>
          <SideNav></SideNav>
          <div className={styles.tabContent}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<WorkExperience />} />
              <Route path="/education-and-recognitions" element={<Education />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
