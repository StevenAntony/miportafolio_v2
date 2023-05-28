export function Button( { text, color, outline } : {
    text: string
    color: string
    outline: boolean
}){
    const outlineStyle = outline ? { borderWidth:'1px',borderColor:color } : {}
    return (
        <button style={{color,...outlineStyle}} className="px-7 py-2 rounded-sm">
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: '#04FFBA',
    outline: false
  };