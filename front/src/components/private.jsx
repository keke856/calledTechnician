import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function Private() {

  const usuarioLogado =  sessionStorage.getItem('token') ? true : false; 

  if (!usuarioLogado) {
    window.location.href = "/login";
    return null; 
  }
  // Se o usuário estiver autenticado, renderize o conteúdo da rota protegida
  return <Outlet />;
}

export default Private;
