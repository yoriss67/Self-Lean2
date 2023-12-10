import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Navbar, Store, Footer } from './index.jsx';
import './index.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { ShoppingCartProvider } from './context/ShoppingCartContext';


function App() {
  return (
    <ShoppingCartProvider>
    <Router>
      <div className="App">
        <Navbar />
        <div className="main">
          <Routes>
            {/* 🙋‍♀️Routeの中でもHomeは"/"なので表示される */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/blog/*" element={<Blog />} /> */}
            {/* <Route path="/about/:id" element={<Blog />} /> */}
            {/* <Route path="/about/:id" element={<Blog1 />} /> */}

            <Route path="/store/*" element={<Store />} />
          </Routes>
        </div>
        <Footer />

      </div>

    </Router>
    </ShoppingCartProvider>
  );
}

export default App;
