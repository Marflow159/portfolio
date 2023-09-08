import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from '../header/Header';
import MainPage from "../pages/MainPage";
import Footer from "../footer/Footer";
import './App.scss';
import '../styles/media.scss'

function App() {
    return (
        <Router>
            <div className='app'>
                {/* <div className="app__width"> */}
                    <Header />
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                    </Routes>
                    <Footer />
                    <div className="app__links">
                        <span></span>
                        <a href="https://github.com/Marflow159"><img src="img/links/Github.png" alt="Github" /></a>
                        <a href="https://www.linkedin.com/in/vlad-bohachenko-756a56279/"><img src="img/links/LinkedIn.png" alt="LinkedIn" /></a>
                        <a href="https://www.instagram.com/_vladb._/"><img src="img/links/instagram.png" alt="LinkedIn" /></a>
                    </div>
                {/* </div> */}
            </div>
        </Router>
    );
}

export default App;
