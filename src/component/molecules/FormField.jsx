import Input from "../atoms/Input"
export default function FormField({type, style, name, value, onChange, label, error}){
    return(
        <>
            {label && <label htmlFor={name}>{label}</label>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Input type={type} style={style} value={value} onChange={onChange} name={name} />
            
        </>
    )
}