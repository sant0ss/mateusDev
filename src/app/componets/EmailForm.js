import React, { useState } from "react";
import { ImArrowRight2 } from "react-icons/im";
import { BeatLoader } from 'react-spinners';
import emailjs from '@emailjs/browser';

export default function EmailForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true)

    if (name === '' || number === '' || email === '' || message === '') {
      setErrorMessage("Preencha todos os campos.");
      setIsLoading(false)
      return;
    }

    const templateParams = {
      from_name: name,
      number: number,
      email: email,
      message: message,
    }

    emailjs.send("service_v1valfp", "template_3att8vt", templateParams, "6GarJ2WzMCTEhDWVS")
      .then(() => {
        setSuccessMessage("Seu email foi enviado!");
        setErrorMessage('');
        setName('');
        setNumber('');
        setEmail('');
        setMessage('');
        setIsLoading(false);
      }, () => {
        setErrorMessage(
          <div>
            Erro ao enviar o e-mail. Tente novamente mais tarde ou{" "}
            <a className="text-indigo-600 underline" href="mailto:contato@mateussantosdev.com">clique aqui </a>
            para entrar em contato
          </div>
          );
          setIsLoading(false);
        setSuccessMessage('');
      });
  }

  return (
    <div>
      <div className="mb-10 m-auto lg:w-2/5 w-full">
      {successMessage && !errorMessage && (
          <div className="success-message">
            <h3>{successMessage}</h3>
          </div>
        )}

        {errorMessage && !successMessage && (
          <div className="error-message">
            <h3>{errorMessage}</h3>
          </div>
        )}
      </div>
      <form
        onSubmit={sendEmail}
        className="contact max-w-4xl text-sm m-auto text-pretin grid grid-cols-2 gap-6"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          className="border border-slate-300 md:col-span-1 col-span-2 p-4 rounded-lg"
          type="text"
          name="name"
          value={name}
        />
        <input
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Telefone"
          className="border border-slate-300 md:col-span-1 col-span-2 p-4 rounded-lg"
          type="text"
          name="number"
          value={number}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className="border border-slate-300 col-span-2 p-4 rounded-lg"
          type="email"
          name="email"
          value={email}
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mensagem"
          className="border border-slate-300 resize-none col-span-2 h-40 p-4 rounded-lg"
          name="message"
          value={message}
        ></textarea>
        <button
          name="acao"
          className={`send-button bg-white shadow-md shadow-gray-500 text-lg font-bold py-5 pl-5 rounded-lg flex m-auto col-span-2 md:w-1/5 w-1/2 mt-4 ${
            isLoading ? "no-padding" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <BeatLoader color={"#123abc"} className="m-auto p-3" loading={true} height={4} />
          ) : (
            <>
              ENVIAR <ImArrowRight2 className="ml-2 my-1 text-xl" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
