import './App.css';
import {Route ,BrowserRouter as Router, Routes} from 'react-router-dom'
import { Auth } from './Auth/Auth';
import { Home } from './Home/Home';
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/home" element={<Home />}/>
        {/* <Route path="/Requests" element={} /> */}
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
