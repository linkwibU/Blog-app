export default function Tetarea({type, style, name, value, onChange}){
    return(
    <textarea type={type} style={style} value={value} onChange={onChange} name={name} ></textarea>
    )
}