import './App.css';
import {Route ,BrowserRouter as Router, Routes} from 'react-router-dom'
import { Auth } from './Auth/Auth';
import { Home } from './Home/Home';
import { Requests } from './Requests/Requests';
import { PrivateRoute , NoAuthGaurd , Private2Route } from './Core/PrivateRoute';
import { Profile } from './Profile/Profile';

// const UserContext = createContext();
function App() {
  return (
    // <UserContext.Provider value={UserContext}>
      <Router>
      <Routes>
          <Route path="/home" element={<PrivateRoute />}>
            <Route path='/home' element={<Home></Home>}/>
          </Route>
          <Route path='/profile' element={<Private2Route> <Profile /> </Private2Route>} />
          <Route path="/requests" element={<PrivateRoute />} >
            <Route path='/requests' element={<Requests />}/>
          </Route>

          <Route path='/auth' element={<NoAuthGaurd path='/auth'/>}>
            <Route path='/auth'  element={<Auth />}/>
          </Route>
      </Routes>
    </Router>
    // </UserContext.Provider>
    
    
  );
}

// export const SetUserContext = () => useContext(UserContext);

export default App;
