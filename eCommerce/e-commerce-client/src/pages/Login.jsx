import axios from 'axios';
import '../styles/login.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            var res = await axios.post("https://localhost:7159/login", data);
            localStorage.setItem("token", res.data.data);
            document.location.href = "/";
        } catch (error) {
            alert(error.response.data.errorMessages[0]);
        }
    }

    return (
        <>
            <div className="login-container">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="card border-0 shadow-lg">
                                <div className="card-header text-center bg-primary border-0 text-white py-3">
                                    <h4 className="mb-0 fw-bold">Giriş Yap</h4>
                                </div>
                                <div className="card-body p-4 p-md-5">
                                    <div className="text-center mb-4">
                                        <i
                                            className="bi bi-person-circle text-primary"
                                            style={{ fontSize: "3rem" }}
                                        />
                                    </div>
                                    <form autoComplete='off' onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label htmlFor="email" className="form-label">
                                                E-posta Adresi
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-envelope text-muted" />
                                                </span>
                                                <input
                                                    type="string"
                                                    className="form-control"
                                                    id="userNameOrEmail"
                                                    name="userNameOrEmail"
                                                    onChange={handleChange}
                                                    placeholder="ornek@email.com"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">
                                                Şifre
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-lock text-muted" />
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    placeholder="********"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 py-2 mb-4">
                                            Giriş Yap
                                        </button>
                                        <div className="text-center">
                                            <span className="text-muted">Hesabınız yok mu?</span>
                                            <a href="/register" className="text-decoration-none ms-1">
                                                Üye Ol
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <a href="/" className="text-decoration-none text-muted">
                                    <i className="bi bi-arrow-left me-1" /> Ana Sayfaya Dön
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;