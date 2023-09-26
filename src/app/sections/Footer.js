import Image from "next/image";
import logo from "../images/sant0ss-white.png"
import SocialMedia from "../componets/SocialMedia";


export default function Footer() {
  return(

    <div className="text-center pt-56 bg-black">
        <Image src={logo} alt="logo" className="w-40 m-auto" />
        <h3 className="mt-10 mb-10 font-semibold text-lg w-2/6 m-auto">Buscar a excelência não é uma corrida, é uma jornada constante de melhoria.</h3>
        <SocialMedia variant="sm-footer"/>
        <p className="text-sm mt-10 pb-10">Feito à mão por mim @ 2023</p>
      </div>

  )
}     