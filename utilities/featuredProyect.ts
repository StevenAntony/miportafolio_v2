interface Proyect {
    title: string
    description: string
    technology: Array<string>
    image: string
    link: string
    category: 'Principal'|'Secondario'
    company: string
}

const featuredProyectList:Array<Proyect> = [
    {
        title: 'Plataforma Pideloya @itnovatelab.com',
        description: `Una plataforma creada para administrar negocios (Restaurant, Distribuidora, Minimarket, Grifo, etc.), Mejorando procesos como la facturación electrónica que permitió reportar SUNAT 
        los comprobantes generados, se realizó integración con envió de correo electrónico. Participación del proyecto fue completa desde el análisis, desarrollo e implementación`,
        technology: ['Laravel', 'Mysql', 'JavaScript', 'Css3', 'Bootstrap', 'DigitalOcean','Scrum','GitHub'],
        image: '/proyect/pideloya.png',
        link:'http://restaurant.pideloya.click/',
        category: 'Principal',
        company:'Itnovate'
    },
    {
        title: 'Campus Educativo @itnovatelab.com',
        description: `Plataforma web para centros educativos que quieren también brindar clases de manera virtual, donde controlan desde la solicitud de matricula hasta el cierre de año escolar 
        con la entrega de notas, se integro con la Api de Google como Google Calendar (Generar Eventos para Google Meet), Google Drive, también se utilizo un servicio para enviar correos, 
        Participación del proyecto fue completa desde el análisis, desarrollo e implementación`,
        technology: ['Laravel', 'Mysql', 'JavaScript', 'Css3', 'Bootstrap', 'DigitalOcean','Scrum','GitHub'],
        image: '/proyect/campus.png',
        link:'http://guadalupecollege.edu.pe/',
        category: 'Principal',
        company:'Itnovate'
    },
    {
        title: 'Plataforma de Hotel @itnovatelab.com',
        description: 'Una web para administrar negocios, como registrar ventas, compras, administrar proveedores, clientes, analisis de datos para tener una toma de desición en el negocios.',
        technology: ['Laravel', 'Mysql', 'JavaScrip', 'Css', 'Bootstrap'],
        image: '/proyect/hotel.png',
        link:'http://delcampojaen.com/',
        category: 'Principal',
        company:'Itnovate'
    }
]

export default featuredProyectList