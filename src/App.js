import './App.css';
import {Route ,BrowserRouter as Router, Routes, Outlet, Navigate} from 'react-router-dom'
import { Auth } from './Auth/Auth';
import { Home } from './Home/Home';
import { Requests } from './Requests/Requests';
import { Profile } from './Profile/Profile';

// const UserContext = createContext();

const PrivateRoute = ({children})=>{
  let tokenExist = localStorage.getItem('token');
  // console.log(isLoggedIn);
  return tokenExist ? children: <Navigate to='/auth' />
}

const NoAuthGaurd = ({children}) =>{
  let tokenExist = localStorage.getItem('token');
  return tokenExist ? <Navigate to='/home' />: children;
}
function App() {
  return (
    // <UserContext.Provider value={UserContext}>
      <Router>
      <Routes>
          <Route path='/home'  element={<PrivateRoute><Home></Home></PrivateRoute> }/>
          <Route path='/profile' element={ <PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='/requests' element={ <PrivateRoute> <Requests /></PrivateRoute> }/>
          <Route path='/auth'  element={<NoAuthGaurd> <Auth /></NoAuthGaurd> }/>
      </Routes>
    </Router>
    // </UserContext.Provider>
    
    
  );
}

// export const SetUserContext = () => useContext(UserContext);

export default App;
