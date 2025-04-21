import '../styles/login.css';

function Login() {
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
                                    <form>
                                        <div className="mb-4">
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
                                                    placeholder="********"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="rememberMe"
                                                />
                                                <label className="form-check-label" htmlFor="rememberMe">
                                                    Beni Hatırla
                                                </label>
                                            </div>
                                            <a href="#" className="text-decoration-none" style={{color: 'rgb(52 58 64) !important '}}>
                                                Şifremi Unuttum
                                            </a>
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