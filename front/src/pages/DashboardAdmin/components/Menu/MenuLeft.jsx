import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faHeadset,faHouse } from "@fortawesome/free-solid-svg-icons";


export default function menuLeft(){
    return(
 
        <div className="w-1/4 p-3">
           
          <div className="rounded-xl bg-zinc-900 h-screen">
             <div>
               <h4 className="text-xl text-center p-5 text-slate-100">Logo</h4>
               <hr className="h-px w-50 bg-zinc-500 border-0"></hr>
             </div>

            <ul className=" text-base mx-2 p-2">
                <li className="text-slate-100 pt-2.5 rounded-xl p-3 hover:bg-slate-500"><a href=""><span className="flex gap-2  items-center"><FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} /> Home</span> </a></li>
                <li className="text-slate-100 pt-2.5 rounded-xl p-3 hover:bg-slate-500"><a href=""><span className="flex gap-2  items-center"><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} /> Usuários</span> </a></li>
                <li className="text-slate-100 pt-2.5 rounded-xl p-3 hover:bg-slate-500"><a href=""><span className="flex gap-2  items-center"><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} /> Clientes</span></a></li>
                <li className="text-slate-100 pt-2.5 rounded-xl p-3 hover:bg-slate-500"><a href=""><span className="flex gap-2  items-center"><FontAwesomeIcon icon={faHeadset} />Chamados</span></a></li>
            </ul>
            </div>
             
         </div>
    );
}