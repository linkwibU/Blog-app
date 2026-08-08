export default function AboutPage(){
    return(
        <div style={{display:'flex', flexDirection:'column', gap:'1em'}}>
            <h1>Về Chúng tôi</h1>
            <h5 className="text-secondary">Blog App là dự án mẫu để thực hành các kỹ năng React  nâng cao</h5>
            <p>Dự án này gồm các chức năng</p>
            <ul>
                <li>Routing và Reacter Router v6</li>
                <li>Quản lý state và Context api useReducer</li>
                <li>Atomatic Design pattern cho cấu trúc component</li>
                <li>Form handling và validate</li>
                <li>Authentication flow cơ bản</li>
                <li>Responsive UI và bootrap cơ bản</li>
            </ul>

            <h5 style={{fontWeight:'700'}}>Mục tiêu</h5>
            <p>Giúp cho các lập trình viên nắm vững kiến thức về React ecosystem thông qua xây dựng 1 ứng dụng thực tế. Từ việc tổ chức file, chia nhỏ component đến xử lý logic.</p>
        </div>
        
     
    )
}