export default function HomePage() {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'2em'}}>
            <p className="text-primary">Chào mừng đến với BlogApp</p>
            <h1>Chia sẻ kiến thức về lập trình</h1>
            <h4 className="text-secondary">Nơi tổng hợp các bài viết về React, typeScript, frontend development luôn cập nhập xu hướng mới</h4>
            <div style={{gap:'20px', display:'flex'}}>
                <button className="btn btn-primary">Xem danh sách bài viết →</button>
                <button className="btn btn-light">Về chúng tôi </button>
            </div>            
            <div style={{display:'flex', flexDirection:'row', gap:"20px"}}>

                <div className="card p-5">
                    <h5 className="card-title">Hiệu suất cao</h5>
                    <p className="text-secondary">Tối ưu hoá trải nghiệm người dùng</p>
                </div>
                <div className="card p-5">
                    <h5 className="card-title">Chất lượng</h5>
                    <p className="text-secondary">Nội dung được biên soạn kỹ lượng, chính xác và dễ hiểu</p>
                </div>
                <div className="card p-5">
                    <h5 className="card-title">Cập nhập</h5>
                    <p className="text-secondary">Luôn cập nhập kiến thức mới trong ngành</p>
                </div>                
            </div>

        </div>

    )
}