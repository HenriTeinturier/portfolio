import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
// import Experience from '../Experience';
// import Projects from '../Projects';
import Contact from '../Contact';
import Error from '../Error';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ProjectDisplay from '../ProjectDisplay';

import '../../styles/Portfolio.scss';

function Portfolio() {
  return (
    <>
      <div className="backgroundFixed" />
      <div className="Portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projets" element={<Projects />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/projet/:id" element={<ProjectDisplay />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
          <Route
            path="*"
            element={(
              <Error />
              )}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default Portfolio;
