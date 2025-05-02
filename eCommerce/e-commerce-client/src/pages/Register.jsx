import { useState } from 'react';
import '../styles/register.css';
import { useNavigate } from 'react-router';
import axios from 'axios';

function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({});

    function handleChange(event) {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    async function register(event) {
        event.preventDefault();
        try {
            var res = await axios.post("https://localhost:7159/register",data);
            localStorage.setItem("token", res.data.data);
            document.location.href = "/";
        } catch (error) {
            alert(error.response.data.errorMessages[0]);
        }
    }

    return (
        <>
            <div className="register-container">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="card border-0 shadow-lg">
                                <div className="card-header text-center bg-primary border-0 text-white py-3">
                                    <h4 className="mb-0 fw-bold">Üye Ol</h4>
                                </div>
                                <div className="card-body p-4">
                                    <div className="text-center mb-4">
                                        <i
                                            className="bi bi-person-plus-fill text-primary"
                                            style={{ fontSize: "3rem" }}
                                        />
                                        <p className="text-muted mt-2">
                                            Hesap oluşturarak alışverişin keyfini çıkarın
                                        </p>
                                    </div>
                                    <form autoComplete='off' onSubmit={register}>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="firstName" className="form-label">
                                                    Ad
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-light">
                                                        <i className="bi bi-person text-muted" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="firstName"
                                                        name="firstName"
                                                        onChange={handleChange}
                                                        placeholder="Adınız"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="lastName" className="form-label">
                                                    Soyad
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-light">
                                                        <i className="bi bi-person text-muted" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="lastName"
                                                        name="lastName"
                                                        onChange={handleChange}
                                                        placeholder="Soyadınız"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">
                                                E-posta Adresi
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-envelope text-muted" />
                                                </span>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    placeholder="ornek@email.com"
                                                    required=""
                                                />
                                            </div>
                                            <small className="form-text text-muted">
                                                E-posta adresiniz giriş bilgisi olarak kullanılacaktır
                                            </small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="userName" className="form-label">
                                                Kullanıcı Adı
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-person text-muted" />
                                                </span>
                                                <input
                                                    type="string"
                                                    className="form-control"
                                                    id="userName"
                                                    name="userName"
                                                    onChange={handleChange}
                                                    placeholder="jhon"
                                                    required=""
                                                />
                                            </div>
                                            <small className="form-text text-muted">
                                                Kullanıcı adınız giriş bilgisi olarak kullanılacaktır
                                            </small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">
                                                Telefon Numarası
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-telephone text-muted" />
                                                </span>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="phone"
                                                    name="phoneNumber"
                                                    onChange={handleChange}
                                                    placeholder="05XX XXX XXXX"
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
                                            <small className="form-text text-muted">
                                                En az 8 karakter, bir büyük harf ve bir rakam içermelidir
                                            </small>
                                        </div>
                                        <div className="mb-4">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="termsCheckbox"
                                                    required=""
                                                />
                                                <label className="form-check-label" htmlFor="termsCheckbox">
                                                    <span>
                                                        <a href="#" className="text-decoration-none">
                                                            Kullanım şartlarını
                                                        </a>{" "}
                                                        ve
                                                        <a href="#" className="text-decoration-none">
                                                            Gizlilik politikasını
                                                        </a>{" "}
                                                        kabul ediyorum
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="newsletterCheckbox"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="newsletterCheckbox"
                                                >
                                                    Kampanya ve fırsatlardan haberdar olmak istiyorum
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 py-2 mb-4">
                                            Üye Ol
                                        </button>
                                        <div className="text-center">
                                            <span className="text-muted">Zaten hesabınız var mı?</span>
                                            <a href="/login" className="text-decoration-none ms-1">
                                                Giriş Yap
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

export default Register;