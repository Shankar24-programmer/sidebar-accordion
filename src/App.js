import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Applications1, AllApplications, AddNewApp} from './pages/Applications'
import {ShopifyStores, AllShopifyStores, AddNewShop} from './pages/Shopify'
import {AuthenticationProviders, AllAuthenticationProviders, AddNewAuth} from './pages/Authentication'
import {Providers, AllProviders, AddNewPro} from './pages/Providers'
function App() {
  return (
    <div className="App">
      <Router>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/applications' element={<Applications1/>}/>
      <Route path='/allapplications' element={<AllApplications/>}/>
      <Route path='/addnew' element={<AddNewApp/>}/>
      <Route path='/shopifystores' element={<ShopifyStores/>}/>
      <Route path='/allshopifystores' element={<AllShopifyStores/>}/>
      <Route path='/addnew' element={<AddNewShop/>}/>
      <Route path='/authenticationproviders' element={<AuthenticationProviders/>}/>
      <Route path='/allauthenticationproviders' element={<AllAuthenticationProviders/>}/>
      <Route path='/addnew' element={<AddNewAuth/>}/>
      <Route path='/providers' element={<Providers/>}/>
      <Route path='/allproviders' element={<AllProviders/>}/>
      <Route path='/addnew' element={<AddNewPro/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
