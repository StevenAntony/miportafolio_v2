import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl"
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"
import Link from "next/link"

export default function FloatingNets(){
    return (
        <div className="fixed bottom-4 w-full justify-center flex gap-3">
            <Link href='https://github.com/StevenAntony' className="hover:-translate-y-2 duration-300 hover:text-app" target="_blank"><SlSocialGithub size={24} /></Link>
            <Link href='https://www.linkedin.com/in/steven-antony-castillo-flores-2502031a7' className="hover:-translate-y-2 duration-300 hover:text-app" target="_blank"><SlSocialLinkedin size={24} /></Link>
            <Link href='https://api.whatsapp.com/send?phone=+51931603815&text=Buenas estimado..' className="hover:-translate-y-2 duration-300 hover:text-app" target="_blank"><FaWhatsapp size={24} /></Link>
            <Link href='mailto:stevendeveloperperu@gmail.com' className="hover:-translate-y-2 duration-300 hover:text-app"><FaEnvelope size={24} /></Link>
        </div>
    )
}