import { useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/login/logo.png'
import '../css/login.css'

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const success = login(id, pw);

        if (success) {
            navigate("/mypage"); 
        } else {
            setError("아이디 혹은 패스워드가 일치하지 않습니다.");
        }
    };

    return (
        <div className="login-page">
            <div className="inner">
                <figure className="logo-area">
                    <img className="logo" src={logo} alt="logo" />
                </figure>
                <div className="id">
                    <span>id:admin</span>
                    <span>pw:1234</span>
                </div>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="아이디"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                    />
                    <button type="submit">로그인</button>
                </form>
                {error && <p className="error" style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    );
};

export default LoginPage;
