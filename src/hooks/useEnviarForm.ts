import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useFormContext } from "../contexts/FormContext";

export const useEnviarForm = () => {
  const { clearForm } = useFormContext();

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const save = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      emailjs
        .sendForm(serviceId, templateId, event.currentTarget, {
          publicKey: publicKey,
        })
        .then(
          () => {
            toast.success("Mensagem enviada com sucesso!");
          },
          (error) => {
            console.log(error);
            toast.error("Ocorreu um erro ao enviar a mensagem.");
          }
        );
      clearForm();
      event.currentTarget.reset();
  };

  return {
      save,
  }
};