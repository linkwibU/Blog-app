export default function Button({label, className, style, onClick, type}){
    return(
        <button className={className} style={style} onClick={onClick} type={type}>{label}</button>
    )
}