import React, { createContext, useState } from "react";


export const CustomContext = createContext();

export const CustomProvider = ({ children }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");


  const getData = ({ nome, email }) => {
    console.log("Dados recebidos: ", { nome, email })

    setNome(nome);
    setEmail(email);
  }
  return (
    <CustomContext.Provider value={{ nome, email, submit: getData }}>
      {children}
    </CustomContext.Provider>

  )
}