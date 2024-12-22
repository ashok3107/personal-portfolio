import SideNav from './components/SideNav/SideNav';
import { Route, BrowserRouter, Routes, Navigate,  } from 'react-router-dom';

import './App.css'
import About from './components/About/About';
import styles from './App.module.scss';
import WorkExperience from './containers/WorkExperience/WorkExperience';
import Portfolio from './containers/Portfolio/Portfolio';

function App() {
  return (
    <>
      <main className={styles.appContainer}>
        <BrowserRouter basename='/personal-portfolio'>
          <SideNav></SideNav>
          <div className={styles.tabContent}>
            <Routes>
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<WorkExperience />} />
              <Route path="/projects" element={<Portfolio />} />
            </Routes>
          </div>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
