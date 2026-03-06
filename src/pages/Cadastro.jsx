import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {
const[login, setLogin] = useState("")
const[senha, setSenha] = useState("")
const navigate = useNavigate()

async function cadastrar(e){
  e.preventDefault()
  await fetch("http://localhost:3020/usuario",{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      login,
      senha
    })
  })
  alert("Usuário cadastrado!!")
  navigate("/")
}

  return (
      <div className="login-container"> 
      <div className="login-box">    
      <h2>Novo Cadastro</h2>

      <form onSubmit={cadastrar}>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        /> <br /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
    </div>
  );
}

export default Cadastro;