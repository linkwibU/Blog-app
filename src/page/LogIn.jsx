import Button from "../component/atoms/Button"
import Input from "../component/atoms/Input"
import Heading from "../component/atoms/Heading"
import FormField from "../component/molecules/FormField"
export default function LogIn() {
    return (
        <div style={{
            textAlign: 'center', padding: '5em', boxShadow: '5px 5px 15px 0px rgba(0, 0, 0, 0.20)',
            borderRadius: '8px'
        }}>
            <Heading label="Đăng nhập"/>
            <p>Sử dụng email bất kì để đăng nhập</p>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <FormField 
                style={{ width: '20em' }} type="email" 
                label="Email"
                />

                <FormField 
                label="Mật khẩu"
                style={{ width: '20em' }} type="password"
                />

            </form>
            <Button className="btn btn-primary" style={{ width: '20em', marginTop:'1em' }} label="Đăng nhập"/>
        </div>

    )
}