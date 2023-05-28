'use client';
import { useState } from "react";

interface Header {
    key: string
    title: string
    children: React.ReactNode
}

const ItemTabs = ({ id, children, className }: {
    id: string
    children: React.ReactNode
    className: string
}) => {
    return (
        <>
            <div id={id} className={className}>
                {children}
            </div>
        </>
    )
}

export default function NavTabs({ header }: {
    header: Array<Header>
}){
    const [select , setSelect] = useState(header[0].key)
    const handleSelect = (key: string) =>{
        setSelect(key)
    }

    return (
        <div className="flex flex-wrap">
            <nav className="sm:w-1/6 w-full sm:m-0 mx-5 sm:my-0 my-5">
                <ul className="sm:block flex">
                    {header.map(obj => {
                        return (
                            <li key={obj.key} className={`${select == obj.key ? 'text-app border-emerald-400' : 'border-slate-500'} 
                                hover:bg-sky-950 duration-300 border-l-2 cursor-pointer px-3 py-2`} 
                                onClick={() => handleSelect(obj.key)}>{obj.title}</li>
                        )
                    })}
                </ul>
            </nav>
            <div className="sm:w-5/6 w-full px-5">
                {header.map(obj => {
                    return (
                        <ItemTabs key={obj.key} id={obj.key} className={`${select == obj.key ? '' : 'hidden'}`}>
                            {obj.children}
                        </ItemTabs>
                    )
                })}
            </div>
        </div>
    )
}
