import { Dispatch, SetStateAction } from "react";

export type FormContextType = {
    tipo: string;
    setTipo: Dispatch<SetStateAction<string>>;
    clearForm: () => void;
};