import { spaceMono } from "@/utilities/fonts"

export default function Paragraph({children, margin, size} : {
    children: React.ReactNode
    margin: boolean,
    size: string
}){
    return (
        <p className={`text-slate-400 ${margin ? 'mt-8' : ''} ${size != '' ? 'text-'+size : '' }`}>
            {children}
        </p>
    )
}

export function Important({children} : {
    children: React.ReactNode
}){
    return (
        <small className={`${spaceMono.className} text-app font-semibold`}>
            {children}
        </small>
    )
}

Paragraph.defaultProps = {
    margin: true,
    size: ''
}