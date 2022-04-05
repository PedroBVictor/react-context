import React, {useState, useContext} from "react"
import { CustomContext } from "./contexto";

// O onSubmit passado como props, e o onSubmit do compnente em geral
export const FormularioCadastro = ({ onSubmit }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const { submit } = useContext(CustomContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Dados enviados: ", {nome, email})
    submit({nome, email});
  }

  return(
    <div>
      <h2>Formulario de Cadastro!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input 
          type="text" 
          name="nome"
          id="nome"
          value={nome}
          onChange={(e)=>setNome(e.target.value)}
        />

        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          name="email" 
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}