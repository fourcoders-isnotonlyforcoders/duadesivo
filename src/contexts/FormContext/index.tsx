import React, { createContext, useContext, useMemo, useState } from "react";
import { FormContextType } from "./types";

const FormContext = createContext(
    {} as FormContextType
);

// eslint-disable-next-line react-refresh/only-export-components
export const useFormContext = () => 
    useContext(FormContext);

const FormContextProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const [tipo, setTipo] = useState("Não Selecionado");

    const clearForm = () => {
        setTipo("Não Selecionado")
    }

    const values = useMemo(
        () => ({
            tipo,
            setTipo,
            clearForm
        }), 
        [
            tipo
        ],
    )

    return (
        <FormContext.Provider value={values}>
            {children}
        </FormContext.Provider>
    );
}

export default FormContextProvider;