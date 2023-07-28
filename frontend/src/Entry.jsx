import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function Entry() {
  return <div>
    <Router>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
        </Routes>
    </Router>
  </div>

}

export default Entry;