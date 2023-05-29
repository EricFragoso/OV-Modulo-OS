import React, { createContext, useState } from 'react';

const ContextQR = createContext();
const ContextQRProvider = ({children}) => {
    const [idAtivoContext, setIDAtivoContext] = useState(null);
    const [cnpjContext, setCnpjContext] = useState(null);

    return (
        <ContextQR.Provider value={{idAtivoContext, setIDAtivoContext, cnpjContext, setCnpjContext}}>
            {children}
        </ContextQR.Provider>
    )

}

export {ContextQR, ContextQRProvider};