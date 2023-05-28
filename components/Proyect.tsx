import FeaturedProyect, { OtherProyects } from "./FeaturedProyect";
import Paragraph from "./utilities/Paragraph";
import featuredProyectList from "@/utilities/featuredProyect";

const ContentProyect = ({ text }: {
    text:string
}) => {
    return (
        <div className="md:w-[35rem] w-full">
            <Paragraph margin={false}>
                {text}
            </Paragraph>
        </div>
    )
}

export default function Proyect(){
    let invert:boolean = true
    return (
        <>    
            {featuredProyectList.filter(obj => obj.category == 'Principal').map(obj => {
                invert = !invert
                return (
                    <FeaturedProyect key={obj.title} 
                        title={obj.title} 
                        content={<ContentProyect text={obj.description} />} 
                        image={obj.image}
                        invert={invert}
                        technology={obj.technology}
                        link={obj.link}
                    />
                )
            })}
            
        </>        
    )
}

export function OtherProyect (){
    return (
        <>
            {featuredProyectList.filter(obj => obj.category == 'Principal').slice(0,6).map(obj => {
                return (
                    <div className="hover:-translate-y-2 duration-300" key={obj.title} >
                        <OtherProyects 
                            title={obj.title} 
                            content={obj.description} 
                            image={obj.image}
                            technology={obj.technology}
                            link={obj.link}
                        />
                    </div>
                )
            })}
        </>
    )
}