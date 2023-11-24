import Header from "../Header/header";
import Style from "./user.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/api";


export default function user() {
    const [token, setToken] = useState(sessionStorage.getItem("token") || null);
    const [updatePassword, setUpdatePassword] = useState(false);
    const [form, setForm] = useState([]);

     function submitUser(e) {
        e.preventDefault();

        if (form.userNewPassword === form.userConfirmedPassword) {
            try {

                const response =  api.post("api/userUpdate", form, {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log("Dados da resposta:", response.data);


            } catch (error) {
                alert("Erro ao fazer a solicitção");
                console.error("Erro ao fazer a solicitação:", error.message);
            }
        } else {
            alert("Senhas não são iguais! ");
        }
    }


 
 

    useEffect(() => { 
        const fetchData = async () => {
       await  api.get("api/userData", {headers:{Authorization: `Bearer ${token}`}})
        .then((response)=>{
            console.log(response.data.usuario.name)
            setForm({
                ...form,
                userName: response.data.usuario.name,
                userEmail: response.data.usuario.email,
            })     
        });

      }

      fetchData();
        }, [])



    return (
        <>
            <Header />

            <div className={Style.container}>
                <div className={Style.userTop}>
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span>Voltar</span>
                    </Link>
                </div>

                <div className={Style.userForm}>
                    <form onSubmit={submitUser}>
                        <div className={Style.formInput}>
                            <label for="userName">Nome de Usuário:</label>
                            <input
                                type="text"
                                id="userName"
                                placeholder="Nome de Usuário"
                                value={form.userName}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        userName: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        <div className={Style.formInput}>
                            <label for="userEmail">Email</label>
                            <input
                                id="userEmail"
                                type="email"
                                placeholder="exemplo@exemplo.com.br"
                                value={form.userEmail}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        userEmail: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        <div className={Style.formInput}>
                            <label for="userPhone">Telefone</label>
                            <input
                                type="text"
                                id="userPhone"
                                placeholder="Telefone"
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        userPhone: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        <div className={Style.formInput}>
                            <label for="userNewPassword">
                                Deseja atualizar a senha?
                            </label>
                            <div className={Style.formInputRadio}>
                                <div>
                                    <label for="userNewPasswordYes">Sim</label>
                                    <input
                                        type="radio"
                                        id="userNewPasswordYes"
                                        name="radioPassword"
                                        onClick={() =>
                                            setUpdatePassword("checked")
                                        }
                                    />
                                </div>

                                <div>
                                    <label for="userNewPasswordNo">Não</label>

                                    <input
                                        type="radio"
                                        id="userNewPasswordNo"
                                        name="radioPassword"
                                        onClick={() => setUpdatePassword(false)}
                                        checked={!updatePassword}
                                    />
                                </div>
                            </div>
                        </div>

                        {updatePassword && (
                            <>
                                <div className={Style.formInput}>
                                    <label for="userNewPassword">
                                        Nova Senha
                                    </label>
                                    <input
                                        type="password"
                                        id="userNewPassword"
                                        placeholder="Senha"
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                userNewPassword: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className={Style.formInput}>
                                    <label for="userConfirmedPassword">
                                        Confirmar Senha
                                    </label>

                                    <input
                                        type="password"
                                        id="userConfirmedPassword"
                                        placeholder="Confirmar Senha"
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                userConfirmedPassword:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </>
                        )}

                        <div className={Style.formInput}>
                            <button type="submit"> Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
