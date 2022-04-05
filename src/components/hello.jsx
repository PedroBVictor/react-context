import React, {useContext} from 'react';

import { CustomContext } from './contexto'

export const Hello = () => {
  const { nome } = useContext(CustomContext);
  return(
    <h1>Ola {nome}</h1>
  )
}