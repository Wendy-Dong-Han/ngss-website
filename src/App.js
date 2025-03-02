import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './components/pages/Home';
import Instructors from './components/pages/Instructors';
import About from './components/pages/About';
import Header from './components/Header'
import Footer from './components/Footer'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        >
        </Route>
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        ></Route>
        <Route
          path="/instructors"
          element={
            <PageWrapper>
              <Instructors />
            </PageWrapper>
          }
        ></Route>
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children}) {
  return (
    <motion.div
      intial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/instructors' element={<Instructors />} />
      </AnimatedRoutes>
      <Footer />
    </Router>
  );
}

export default App;
