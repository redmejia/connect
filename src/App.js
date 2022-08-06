import './App.css';
import { Routes, Route } from "react-router-dom";

import BusinessDashboard from "./Components/BusinessDashboard";
import Find from './Components/Find'
import Signin from './Components/Signin'

import ConnectHome from './Components/ConnectHome'


import DealType from './Components/DealType';
import ConnectDeals from './Components/ConnectDeals';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path='/c/home' element={<ConnectHome />} />
        <Route path='/my/dashboard' element={<BusinessDashboard  />} />
        <Route path='/find' element={<Find />} />
        <Route path='/find/my/deal/:type' element={<DealType />} />
        <Route path='/c/deals' element={<ConnectDeals />} />
      </Routes>
    </>
  )
}

export default App;
