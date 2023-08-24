import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Container } from '@mui/system';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';
import Series from './pages/Series/Series';

function App() {
  return (
    <Router>
      <Header/>
      <div className='app'>
      <Container>
        <Routes>
          <Route exact path="/" element={<Trending/>} />
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/search" element={<Search/>} />
          <Route path="/series" element={<Series/>} />
        </Routes>
      </Container>
      </div>
      <SimpleBottomNavigation/>
    </Router>
  );
}

export default App;
