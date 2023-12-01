import { react, useEffect, useState } from "react";
import Header from "../components/Header/header";
import MenuLeft from "../components/Menu/MenuLeft";
import api from "../../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../components/Modal/Modal";


export default function index() {


    const [calleds, setCalleds] = useState([]);
    const [urlPaginate,setUrlPaginate] = useState(false);
    const [modalCalled,setModalCalled] = useState(false);
    const [detailsModalCalled,setMetailsModalCalled] = useState("");

    const[formModal,setFormModal] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await api.get( urlPaginate?urlPaginate:"/api/admin/dashboard").then((response) => {
                console.log(response)
                setCalleds({
                    ...calleds,
                    calleds: response.data.data,
                    paginate: response.data.links,
                    firstPage:response.data.first_page_url,
                    lastPage:response.data.last_page_url

                });
            });
        };

        fetchData();
    }, [urlPaginate]);


   function called(data){
    setModalCalled(!modalCalled)
    setMetailsModalCalled(data)
   }



   function updateCalled(e){
       e.preventDefault();

       const formData = new FormData(e.target);
       const description = formData.get('descriptionCalled');
       const status = formData.get('status');
       const id = formData.get('id');
      
       console.log(id)


       api.post("/api/admin/dashboard/update/called",formData)
       .then((response)=>console.log(response))
   }


    return (
        <>
            <div className="flex ">
                <MenuLeft />

                <div className="w-screen p-3 ">
                    <Header />

                    <div className="p-5 flex flex justify-between items-center mb-4">
                        <h2 className="font-bold">Chamado Técnico</h2>
                        <div className="flex gap-2">
                            <button className="border-red-600 text-red-600  border-2 rounded p-1">
                                Em Aberto
                            </button>
                            <button className="border-yellow-600 text-yellow-600  border-2 rounded  p-1">
                                Em Andamento
                            </button>
                            <button className="border-green-600 text-green-600  border-2 rounded  p-1">
                                Concluido
                            </button>
                        </div>
                    </div>

                    <div class="relative overflow-x-auto h-max drop-shadow-md">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-center"
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-center"
                                    >
                                        Cliente
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-center"
                                    >
                                        Solicitação
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-center"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-center"
                                    >
                                        Abertura
                                    </th>

                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-center"
                                    >
                                        Visualizar
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {calleds.calleds &&
                               
                                    calleds.calleds.map((item) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th
                                                scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {item.idCalled}
                                            </th>
                                            <td class="px-6 py-4 text-center">
                                                {item.user.name}
                                            </td>
                                            
                                            <td class="px-6 py-4 text-center">
                                                {" "}
                                                {item.type}
                                            </td>
                                            <td class="px-6 py-4 text-center">
                                                {" "}
                                                {item.status}
                                            </td>
                                            <td class="px-6 py-4 text-center">
                                                {item.create} {item.createTime}
                                            </td>
                                            <td class="px-6 py-4 text-center " onClick={()=>called({
                                               id:item.id,idCalled:item.idCalled,user:item.user.name,email:item.user.email,type:item.type,status:item.status,create:item.create +" "+ item.createTime,description:item.description})}>
                                                <FontAwesomeIcon icon={faEye} />
                                            </td>
                                        </tr>
                                    ))
                                    
                                    }
                            </tbody>
                        </table>
                    </div>



                    <div className="flex justify-center mt-5">
                        <ul className="flex m-auto">
                            {calleds.paginate && (
                               
                                <>
                                    <li className="p-1 border cursor-pointer" onClick={()=>setUrlPaginate(calleds.firstPage)}>Inicio</li>

                                    {calleds.paginate.map((data, index) => (
                                        <li className={`p-1 border ${data.active && "bg-slate-800 text-zinc-100"} cursor-pointer `}  onClick={()=>setUrlPaginate(data.url)} key={index}>
                                            {data.label}
                                        </li>
                                    ))}

                                    <li className="p-1 border cursor-pointer" onClick={()=>setUrlPaginate(calleds.lastPage)}>Fim</li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>


            <Modal nameModal="Chamado" closeModal={modalCalled} actionModal={setModalCalled} >
              
                 <div>
                     
                      <div>
                         <form onSubmit={updateCalled}>
                              <p className="text-sm text-stone-600 pt-1"><strong>Cliente:</strong> {detailsModalCalled.user}</p>
                              <p className="text-sm text-stone-600 pt-1"><strong>Email:</strong>   {detailsModalCalled.email}</p>
                              <p className="text-sm text-stone-600 pt-1"><strong>Telefone:</strong> 11111111111</p>
                               <input type="hidden" name="id" value={detailsModalCalled.id} />
                              <label>
                              <strong className="text-sm text-stone-600">Status:</strong>

                                <select name="status" value={formModal.status} onChange={(e)=>setFormModal({...formModal,status:e.target.value})}>
                                    <option value={"Em Aberto"} className="text-sm text-stone-600">Em Aberto</option>
                                    <option value={"Em Andamento"} className="text-sm text-stone-600">Em Andamento</option>
                                    <option value={"Concluido"} className="text-sm text-stone-600">Concluido</option>

                                </select>

                              </label>
                                <br></br> <br></br>
                              <p className="text-sm text-stone-600">
                                <strong>Descrição do Cliente:</strong><br></br>
                                {detailsModalCalled.description}
                              </p>
                              <br></br> <br></br>
                               <label className="text-sm text-stone-600">
                                 <strong>Descrição do Chamado:</strong>
                                <textarea name="descriptionCalled"  onChange={(e)=>setFormModal({...formModal,descriptionCalled:e.target.value})} className="w-full h-28 p-2 border border-slate-500 border-solid">
                                        
                                </textarea>
                                </label>

                                <button type="submit" className="border rounded w-full text-slate-100 bg-gray-500 p-2">Salvar</button>
                           </form>
                      </div>
                     
                    </div>
                 
             
                </Modal>


        </>
    );
}
