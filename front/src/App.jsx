
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  redirect ,
  BrowserRouter
} from "react-router-dom";

import'./app.css';
import "./index.css";
import Dashboard from './pages/Dashboard';
import DashboardAdmin from './pages/DashboardAdmin/index';
import AdminPageUsers from './pages/DashboardAdmin/users/users';
import Teste from './pages/Teste';
import Private from "./components/private";
import Login from "./pages/login/login";
import UserClient from "./pages/Dashboard/UserClient/user";

function App() {


  return (
   
          <BrowserRouter>
      
            <Routes>
     
         

               {/* <Route path="/" element={<h1> Home </h1>}></Route> */}
 
               <Route path="/login" element={<Login/>}></Route>

             

                <Route element={<Private role="user"/>}>
                    <Route path="/dashboard" element={<Dashboard/>}></Route>
                    <Route path="/UserClient" element={<UserClient/>}></Route>
                  </Route>  

                  <Route element={<Private role="admin"/>}>
                     <Route path="/dashboardAdmin" element={<DashboardAdmin/>}></Route>
                     <Route path="/dashboardAdmin/users" element={<AdminPageUsers/>}></Route>   
                    </Route>

                <Route path="*" element={<h1>404</h1>}> </Route>
           
             
            </Routes>
      
      </BrowserRouter>


  )
}

export default App
