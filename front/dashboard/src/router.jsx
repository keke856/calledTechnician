
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
    BrowserRouter
  } from "react-router-dom";

  import Teste from "./pages/Teste"
  import Dashboard from './pages/Dashboard';



 const Router = ()=>(
    <BrowserRouter>
 
        <Routes>

          <Route  path="/login" element={<Teste/>}> </Route>
          
      
          <Route path="/dashboard" element={<Dashboard/>} > </Route>

      
          <Route path="/*" element={<App/>}> </Route>
          
        </Routes>

  </BrowserRouter>

);

export default Router;