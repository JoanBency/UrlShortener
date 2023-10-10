import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShortenUrlComponent from './components/Url/ShortenUrlComponent';
import ViewUrlComponent from './components/Url/ViewUrlComponent';
import Header from './components/Header';
import Home from './Home';
import sunset from './assets/sunset.jpg';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{
            backgroundImage: `url(${sunset})`,
            height: '90vh',
            width: '100vw',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortenUrl" element={<ShortenUrlComponent />} />
        <Route path="/listUrls" element={<ViewUrlComponent />} />
      </Routes>
      </div>
      </BrowserRouter>
    );
}

export default App;
