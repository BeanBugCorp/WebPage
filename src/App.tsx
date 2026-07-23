import { Routes, Route } from 'react-router-dom';
import GridBackground from './components/GridBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <>
      <GridBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
