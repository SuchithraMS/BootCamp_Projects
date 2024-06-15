
import './App.css';
// import Counter from './Components/Counter'
// import Navbar from './Components/Navbar';
// import Home from './Components/Home'
// import About from './Components/About';
// import './App.css'

import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import Carousel_element from './Components/Carousel_element';
import ImageGallery from './Components/ImageGallery';
function App() {
  return (
    <div className="App">      
    <ImageGallery></ImageGallery>
      {/* <BrowserRouter>
      <Navbar/>
    <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/count' element={<Counter/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
