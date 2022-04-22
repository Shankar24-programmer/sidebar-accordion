import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes>
    </Router>
    </div>
  );
}

export default App;
