import { spaceMono } from "@/utilities/fonts"
import Link from "next/link";

export default function Navigation(){
    return (
        <nav className={spaceMono.className}>
            <ul className="flex gap-8 justify-end text-slate-300">
                <li><Link href={'/#acerca'}> Acerca de</Link></li>
                <li><Link href={'/#experiencia'}> Experiencia</Link></li>
                <li><Link href={'/#trabajo'}> Trabajo</Link></li>
                <li><Link 
                    target="_blank"
                    href={'/ANALISTA & PROGRAMARDOR - CASTILLO FLORES STEVEN ANTONY.pdf'}>CV</Link></li>
            </ul>
        </nav>
    )
}