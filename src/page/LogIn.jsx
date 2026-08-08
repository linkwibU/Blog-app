
export default function LogIn() {
    return (
        <div style={{
            textAlign: 'center', padding: '5em', boxShadow: '5px 5px 15px 0px rgba(0, 0, 0, 0.20)',
            borderRadius: '8px'
        }}>
            <h1>Đăng nhập</h1>
            <p>Sử dụng email bất kì để đăng nhập</p>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <label htmlFor="email">Email</label>
                <input style={{ width: '20em' }} type="email" />
                <label htmlFor="password">Mật khẩu</label>
                <input style={{ width: '20em' }} type="password" />
                
            </form>
            <button className="btn btn-primary" style={{ width: '20em', marginTop:'1em' }}>Đăng nhập</button>
        </div>

    )
}