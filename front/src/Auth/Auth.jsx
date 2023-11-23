
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

  

  const Auth = ({path,element: Element})=>{

      <Route path={path} component={Element} />
  };

  export default Auth;