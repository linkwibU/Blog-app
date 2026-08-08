export default function Input({type, style, name, value, onChange}){
    return(
    <input type={type} style={style} value={value} onChange={onChange} name={name} />
    )
}