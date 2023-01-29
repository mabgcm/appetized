import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import About from './pages/About';
import Home from './pages/Home';
import Account from './pages/Account';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';
import Myrecipes from './pages/Myrecipes';
import Myrecipes2 from './pages/Myrecipes2';
import Contact from './pages/Contact';
import Numbers from './components/Numbers';
import Detail from './components/Detailed/Detail';
import Filtering from './components/Detailed/Filtering';
import Results from './components/Detailed/Results';
import Recipe from './components/Recipe/Recipe';
import Thereceipe from './components/Recipe/Thereceipe';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signin' element={<Signin />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='account' element={<Protected><Account /></Protected>} />
          <Route path='myrecipes' element={<Protected><Myrecipes /></Protected>} />
          <Route path='myrecipes2' element={<Protected><Myrecipes2 /></Protected>} />
          <Route path='recipe' element={<Protected><Recipe /></Protected>} />
          {/* <Route path='recipe/:id' element={<Protected><Recipe /></Protected>} /> */}
          <Route path='therecipe/:id' element={<Thereceipe />} />
          <Route path='numbers' element={<Numbers />} />
          <Route path='detail' element={<Detail />} />
          <Route path='filter' element={<Filtering />} />
          <Route path='results' element={<Results />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
