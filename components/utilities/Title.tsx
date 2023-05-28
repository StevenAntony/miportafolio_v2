export const TitleH3 = ({ text } : {
    text: string
}) => {
    return (
        <h3 className="text-center text-3xl font-bold">{text}</h3>
    )
}

export const TitleH4 = ({ text } : {
    text: string
}) => {
    return (
        <h4 className="text-center text-2xl font-semibold">{text}</h4>
    )
}

export const TitleH5 = ({ text } : {
    text: string
}) => {
    return (
        <h5 className="text-xl">{text}</h5>
    )
}

export const TitleH6 = ({ text } : {
    text: string
}) => {
    return (
        <h6 className="text-lg">{text}</h6>
    )
}