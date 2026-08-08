import {  Navigate, useNavigate } from "react-router-dom";
import Button from "../component/atoms/Button";
import Heading from "../component/atoms/Heading";
export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'2em'}}>
            <p className="text-primary">Chào mừng đến với BlogApp</p>
            <Heading label="Chia sẻ kiến thức về lập trình và công nghệ"/>
            <h4 className="text-secondary">Nơi tổng hợp các bài viết về React, typeScript, frontend development luôn cập nhập xu hướng mới</h4>
            <div style={{gap:'20px', display:'flex'}}>
                <Button className="btn btn-primary" onClick={() => navigate('/posts')} label="Xem danh sách bài viết →"/>
                <Button className="btn btn-light" onClick={() => navigate('/about')} label="Về chúng tôi"/>
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