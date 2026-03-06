import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css";

function Login() {
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const navigate = useNavigate()

  async function validarLogin(e) {

  e.preventDefault()
  const response = await fetch("http://localhost:3020/usuario")
  const usuarios = await response.json()
  const usuarioValido = usuarios.find(
  (u) => u.login === login && u.senha === senha
  )

  if(usuarioValido){
    navigate("/home")
  }
    else{
      setErro("Login ou Senha errados!")
    }
  }
  
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={validarLogin}>
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
          />
          <button type="submit">Entrar</button>
        </form>
        
        {erro && <p style={{ color: "red", marginTop: "10px" }}>{erro}</p>}
        
        <Link to="/cadastro" className="signup-link">
          Não tem conta? Cadastre-se
        </Link>
      </div>
    </div>
  ) 
}

export default Login