import SideNav from './components/SideNav/SideNav';
import { Route, Routes, Navigate, HashRouter,  } from 'react-router-dom';

import './App.css'
import About from './containers/AboutMe/About';
import styles from './App.module.scss';
import WorkExperience from './containers/WorkExperience/WorkExperience';
import Portfolio from './containers/Portfolio/Portfolio';
import LinkManagerContextProvider from './store/link-manger-context';

function App() {
  return (
    <LinkManagerContextProvider>
      <main className={styles.appContainer}>
        <HashRouter>
          <SideNav></SideNav>
          <div className={styles.tabContent}>
            <Routes>
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<WorkExperience />} />
              <Route path="/projects" element={<Portfolio />} />
            </Routes>
          </div>
        </HashRouter>
      </main>
    </LinkManagerContextProvider>
  )
}

export default App
