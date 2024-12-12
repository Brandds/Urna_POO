import React from 'react';
import { useSelector } from 'react-redux';

export default function Principal() {
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log(userInfo)

  return(
    <div>
      <header style={{ width: 500  , justifyItems:"center"}}>
        <h1>Tela Inicial</h1>
        <h3>Usuário: {userInfo.nome}</h3>
      </header>
      <section>
        <article></article>
      </section>
    </div>
  )
}