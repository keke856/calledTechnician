import { react,useEffect, useState } from "react";
import Header from "../components/Header/header";
import MenuLeft from "../components/Menu/MenuLeft";
import api from "../../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";




export default function users() {

  const [calleds,setCalleds ] = useState([]);

  useEffect(() => {

    const fetchData =  async ()=>{
       await api.get('/api/admin/dashboard')
        .then((response)=>setCalleds({...calleds,calleds:response.data}))
    }

 fetchData();
},[])


    return (
        <>
            

            <div className="flex ">
                <MenuLeft />

                <div className="w-screen p-3 ">
                  <Header />

                   <div className="p-5 flex flex justify-between items-center mb-4" >
                      <h2 className="font-bold">Usuários</h2>
                       <div className="flex gap-2">
                         <button className="border-red-600 text-red-600  border-2 rounded p-1"> Em Aberto</button>
                         <button className="border-yellow-600 text-yellow-600  border-2 rounded  p-1"> Em Andamento</button>
                         <button className="border-green-600 text-green-600  border-2 rounded  p-1"> Concluido</button>

                       </div>
                     </div>





             </div>   
            </div>
        </>
    );
}
