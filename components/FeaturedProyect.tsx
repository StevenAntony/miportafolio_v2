import { spaceMono } from "@/utilities/fonts";
import { TitleH5, TitleH6 } from "./utilities/Title";
import Image from "next/image";
import Paragraph, { Important } from "./utilities/Paragraph";
import Link from "next/link";
import { SlFolder } from 'react-icons/sl';

export default function FeaturedProyect({title, content, image, invert, technology, link}:{
    title: string
    content: React.ReactNode
    image: string
    invert: boolean
    technology: Array<string>
    link: string
}) {
    return (
        <div className={`flex relative md:my-20 my-10 ${!invert ? 'justify-end' : 'justify-start'} w-full`}>
            <div className={`absolute ${!invert ? 'left-0' :'right-0'} -z-10 sm:block hidden`}>
                <Image 
                    src={image}
                    width={600}
                    height={500}
                    className="blur-0 h-[20rem]"
                    alt={title}
                />
                <div className="bg-teal-500 absolute opacity-40 w-full h-full top-0 left-0"></div>
            </div>
            <div className={!invert ? 'text-right' : 'text-left'}>
                <span className={`${spaceMono.className} text-app text-xs`}>Proyecto Destacado</span>
                <Link href={link} target="_blank"><span className="hover:text-app"><TitleH5 text={title} /></span></Link>
                <div className="bg-slate-950 px-5 py-10 drop-shadow-lg rounded-md mt-3">
                    {content}
                </div>
                <div className={`flex flex-wrap ${!invert ? 'justify-end' : 'justify-start'}`}>
                    <div className="md:w-[25rem] flex flex-wrap">
                        {technology.map(obj => {
                            return (
                                <span className="mx-2" key={obj}><Important>{obj}</Important></span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function OtherProyects ({title, content, image, invert, technology, link}:{
    title: string
    content: string
    image?: string
    invert?: boolean
    technology: Array<string>
    link: string
}){
    return (
        <div className="p-8 bg-blue-950 rounded-md shadow-lg h-full">
            <div><SlFolder className="text-app" size={30} /></div>
            <div className="my-3"><Link href={link} target="_blank"><span className="hover:text-app"><TitleH6 text={title} /></span></Link></div>
            <Paragraph margin={false} size={'sm'}>
                {content}
            </Paragraph>
            <div className="my-4 px-3 flex flex-wrap gap-x-3">
                {technology.map(obj => {
                    return (
                        <span key={obj}><Important>{obj}</Important></span>
                    )
                })}
            </div>
        </div>
    )
}