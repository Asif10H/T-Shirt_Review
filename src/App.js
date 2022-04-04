import { Navigate, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Review from './component/Review/Review';
import Blogs from "./component/Blogs/Blogs";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/> 
       <Routes>
        <Route path="/" element={<Navigate to="/Home"/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/review" element={<Review />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
