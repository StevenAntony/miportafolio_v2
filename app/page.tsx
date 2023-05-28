import Header from "@/components/Header"
import { spaceMono } from "@/utilities/fonts"
import { Button } from "@/components/utilities/Button"
import { TitleH3 } from "@/components/utilities/Title"
import Image from "next/image"
import Paragraph, { Important } from "@/components/utilities/Paragraph"
import Link from "next/link"
import NavTabs from "@/components/utilities/NavTabs"
import { Unprg, ItnovateLab } from "@/components/Experience"
import Proyect, {OtherProyect} from "@/components/Proyect"
import FloatingNets from "@/components/FloatingNets"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="2xl:mx-96 xl:mx-32 mx-10 sm:py-28">
          <p className={`${spaceMono.className} text-app mb-3`}>Hola, soy</p>
          <h2 className="sm:text-6xl text-3xl font-black mb-2">Steven Antony</h2>
          <h1 className="sm:text-7xl text-4xl font-black text-slate-400">Programador Web</h1>
          <div className="sm:w-5/12">
            <Paragraph >
              Soy Egresado de la carrera de Ingeniería en Computación e Informática de la Universidad Nacional Pedro Ruiz Gallo,
              me especializo en análisis, diseño, programación de aplicaciones web.
            </Paragraph>
          </div>
          <div className="mt-2">
            <Button text="CV" outline={true} />
          </div>
        </section>
        <section className="2xl:mx-96 xl:mx-32 py-28 scroll-smooth" id="acerca">
          <TitleH3 text="Acerca de mí" />
          <div className="sm:flex py-10">
            <div className="sm:w-2/6 px-10 mx-10">
              <div className="border-2 border-emerald-500 p-2 mt-16 w-full">
                <Image 
                  className="w-full h-full hover:scale-105 duration-500 sm:m-0 m-auto"
                  src={'/foto.jpeg'}
                  width={180}
                  height={180}
                  alt="Mi Foto Steven Antony"
                />
              </div>
            </div>
            <div className="sm:w-4/6 px-8">
              <Paragraph >
                ¡Hola! Mi nombre es Steven Antony y me complace presentarme. Soy un profesional con experiencia en el campo del desarrollo de aplicaciones web. 
                A lo largo de los últimos cinco años, he trabajado en diversas empresas, desempeñando roles <Important>Programador</Important>, <Important>Analista</Important>
                , <Important>Gestor de Base de Datos</Important>, <Important>UX & UI</Important>, <Important>Administrador de Servidor web (Digital Ocean)</Important>.
                <br /> <br />
                Mis habilidades y competencias principales incluyen el dominio de herramientas & lenguajes, <Important>JavaScript</Important>, <Important>Node.js</Important>
                , <Important>ReactJS</Important>, <Important>ReactNative</Important>, <Important>Next.JS</Important>, <Important>PHP</Important>, <Important>Laravel</Important>
                , <Important>Java</Important>, <Important>MongoDB</Important>, <Important>MySQL</Important>, <Important>SQLServe</Important>, <Important>Scrum</Important>
                , <Important>Git</Important>, entre otros. También tengo una sólida comprensión de adaptación y cambio a un nuevo lenguaje.
                <br /> <br />
                A lo largo de mi carrera, he tenido la oportunidad de participar en proyectos, como la implementación de <Important>sistemas contable</Important> (Distribuidora, Farmacia
                , Restaurant, Grifo, Minimarket, Clinica..), <Important>sistemas educacional</Important>, <Important>sistemas incidencia</Important> que mejoró la eficiencia y la precisión de los informes. 
                Estos logros me permitió desarrollar habilidades de liderazgo y trabajo en equipo, además de fortalecer mi capacidad para manejar proyectos complejos.
                <br />
                <Link href={'/about'} className="text-app">Saber mas...</Link>
              </Paragraph>
            </div>
          </div>
        </section>
        
        <section className="2xl:mx-96 xl:mx-32 py-28 scroll-smooth" id="experiencia">
          <TitleH3 text="Experiencia" />
          <div className="py-10">
            <NavTabs header={[
                {
                  key: '01', title: 'ItnovateLab', children: <ItnovateLab />
                }, 
                {
                  key: '02', title: 'UNPRG',children: <Unprg />
                }]} />
          </div>
        </section>
        <section className="2xl:mx-96 xl:mx-32 py-28 scroll-smooth" id="trabajo">
          <TitleH3 text="Trabajos Destacados" />
          <div className="py-10 sm:px-10 px-0">
            <Proyect />
          </div>
        </section>
        <section className="2xl:mx-96 xl:mx-32 py-28">
          <TitleH3 text="Otros proyectos destacados" />
          <div  className="text-center"><Link href={'#'} className="text-app"> Ver Todos </Link></div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-2 gap-3 mt-10">
            <OtherProyect />
          </div>
        </section>
        <section className="2xl:mx-96 xl:mx-32 py-28">
          <TitleH3 text="Ponerse en contacto" />
          <div className="md:w-[35rem] w-full max-md:px-5 m-auto text-center">
            <Paragraph>
              Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tenga una oportunidad de trabajo, 
              realizar en un proyecto, ¡haré todo lo posible para responderle!
            </Paragraph>
          </div>
          <div className="text-center my-10">
            <Button text="Hola !" outline={true} />
          </div>
        </section>
      </main>
      <FloatingNets />
    </>
  )
}
