import EmailForm from "../componets/EmailForm";
import Button from "../componets/Button";

export default function Contact() {
  
  return(

    <div id="contato" className="bg-cinza border-t border-gray-300 ">
       <div className="px-10">
          <h2 className="pt-20 pb-10 text-center text-black font-bold text-4xl">ENTRE EM CONTATO</h2>
          <EmailForm />
          <div className="relative md:top-20 top-32 rounded-xl bg-pretin m-auto lg:max-w-6xl max-w-2xl w-6/7 lg:flex block justify-between py-14 md:px-10 px-3">
            <h1 className="text-2xl text-center mt-4">Comece o Seu Projeto</h1>
            <p className="text-center text-lg lg:mt-1 mt-6 lg:m-0 mb-6 lg:w-1/3 w-4/6 m-auto ">Interessado em colaborar? Vamos agendar uma conversa para discutir melhor.</p>
            <Button variant="bt-contact" link="https://api.whatsapp.com/send?phone=558596951897"/>
          </div>
          </div>
      </div>

  )
}     

