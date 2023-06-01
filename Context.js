import React, { createContext } from 'react';

const Context = createContext({ listaDeOS: null, setListaDeOS: (array) => { } });

export default Context;