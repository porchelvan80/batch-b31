import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import User from './component/User'
import UserData from './component/UserData';

function App() {
  return (
    <div className="App">
      <h1> hello developers</h1>
      <Routes>
        <Route path="/user" element={<User/>}/>
        <Route path="/user1/:userId" element={<UserData/>}/>
        <Route path="/user1/:userId" element={<UserData/>}/>
        <Route path="/user1/:userId" element={<UserData/>}/>
        
      </Routes>
      
      
    </div>
  );
}

export default App;
