import Image from "next/image";
import Button from "../componets/Button";
import TextMe from "../componets/TextMe";
import perfil from "../images/perfil.png"

export default function AboutMe() {
  return(

    <div className="lg:mt-24 mt-5 pb-80 ">
    <div className="drop-shadow-2xl rounded-3xl py-10 block lg:flex max-w-7xl m-auto ">
    <div className="lg:pl-7 pl-0 mt-10 md:mt-0">
      <Image src={perfil} alt="Perfil" className="rounded-full lg:w-7/12 w-6/12 m-auto" priority={true}/>
    </div>

    <div className="px-8 relative lg:right-20 right-0 lg:mt-5 mt-20 lg:w-10/12 w-full">
        <TextMe className="drop-shadow-2xl "/>
        <Button variant="bt-header" link="https://api.whatsapp.com/send?phone=558596951897" />
    </div>
    </div>
  </div>

  )
}     