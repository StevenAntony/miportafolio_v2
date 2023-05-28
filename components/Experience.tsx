import { spaceMono } from "@/utilities/fonts"
import { TitleH5 } from "./utilities/Title"

const experienciaItnovatelab = [
    'Desarrollo de aplicaciones web con Apis, aplicaciones de ventas, campus virtuales, transporte etc.',
    'Captura y análisis de requerimientos Funcionales y no funcionales.',
    'Diseño y prototipado de interfaz de usuario.',
    'Programación de base de datos con Mysql, SQL Server.',
    'Programación en PHP, utilizando el framework Laravel, css3, JavaScript.',
    'Servidor DigitalOcean.',
    'Integraciones con Google, Zoom.'
]

const experienciaUNPRG = [
    'Captura y análisis de requerimientos Funcionales y no funcionales.',
    'Diseño y prototipado de interfaz de usuario.',
    'Programación de base de datos en Oracle 12c Enterprise Edition.',
    'Programación en PHP 7 utilizando el framework Laravel 5.',
    'Integración y versionamiento con Bitbucket.',
    'Desarrollo del proyecto bajo marco de trabajo SCRUM usando como herramienta de gestión Trello.'
]


export const Unprg = () => {
    return (
        <>
            <TitleH5 text="Programador" />
            <p className={`${spaceMono.className} text-slate-400 text-sm`}>Abril 2018 - Julio 2018</p>
            <ul className="relative pt-4">
                {experienciaUNPRG.map(obj => {
                    return (
                        <li className="list px-5" key={obj}> {obj}</li>
                    )
                })}
            </ul>
        </>
    )
}

export const ItnovateLab = () => {
    return (
        <>
            <TitleH5 text="Analista & Programador" />
            <p className={`${spaceMono.className} text-slate-400 text-sm`}>Agosto 2018 - Presente</p>
            <ul className="relative pt-4">
                {experienciaItnovatelab.map(obj => {
                    return (
                        <li className="list px-5"  key={obj}> {obj}</li>
                    )
                })}
            </ul>
        </>
    )
}
