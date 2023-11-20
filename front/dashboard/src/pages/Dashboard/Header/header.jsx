
import Modal from "../../../components/Modal/Modal";
import Style from "./header.module.scss";
import userImg from "./user.png"
import {Link,useNavigate} from "react-router-dom";

export default function header(){
    const navigate = useNavigate();


    function logout(){
      sessionStorage.removeItem('token');
        navigate("/login"); 
    }



    return(
       <> 
        <header>

        <div className={Style.container}>

             <div>
                <h2>Logo do cliente</h2>
                </div>

              
                              
                <div className={Style.user}>
                    <div>
                        <img src={userImg} />
                    </div>

                    <ul>
                        <li>Alterar dados</li>
                        <li onClick={()=>logout()}>Logout</li>
                    </ul>
                </div>



            </div>
        </header>

       

        </>
    );
}