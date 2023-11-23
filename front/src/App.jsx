
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
import Dashboard from './pages/Dashboard';
import Teste from './pages/Teste';
import Private from "./components/private";
import Login from "./pages/login/login";


function App() {


  return (
   
          <BrowserRouter>
      
            <Routes>
     
         

               {/* <Route path="/" element={<h1> Home </h1>}></Route> */}
 
               <Route path="/login" element={<Login/>}></Route>
               <Route path="/logout" element={()=>{storage.removeItem('token');}}></Route>

                <Route element={<Private/>}>
                    <Route path="/dashboard" element={<Dashboard/>}></Route>
                 </Route>
                <Route path="*" element={<h1>404</h1>}> </Route>
           
             
            </Routes>
      
      </BrowserRouter>


  )
}

export default App
