import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { useCountStore } from "../states/count.state";

function Layout() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const { count, fetch} = useCountStore();

    async function getCategories() {
        const response = await axios.get("https://localhost:7159/categories");
        setCategories(response.data);
    };

    function checkLogin(){
        localStorage.getItem("token") ? setIsLogin(true) : setIsLogin(false);
    }


    function logout(){
        localStorage.removeItem("token");
        setIsLogin(false);
        navigate("/login");
    }
    useEffect(() => {
        getCategories();
        checkLogin();
        fetch();
    },[]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="/">
                        ModernShop
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    Ana Sayfa
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/products">
                                    Ürünler
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Kategoriler
                                </a>
                                <ul className="dropdown-menu">
                                    {categories.map((val,i) => {
                                        return(
                                            <li key={i}>
                                                <a className="dropdown-item" href={"/products/" + val.urlShortName}>
                                                    {val.name}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/orders">
                                    Siparişlerim
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {
                            isLogin ? (
                                <>
                                <Link to="/carts" className="btn btn-outline-dark position-relative me-2">
                                    <i className="bi bi-cart" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {count > 0 ? count : ""}
                                    </span>
                                </Link>
                                <a onClick={logout} className="btn btn-outline-dark">
                                    <i className="bi bi-power" />
                                </a>
                                </>
                            ) : <Link to="/login" className="btn btn-outline-dark me-2">
                                    <i className="bi bi-lock" />
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-white mb-4">ModernShop</h5>
                            <p>
                                Kaliteli ürünler, uygun fiyatlar ve mükemmel müşteri deneyimi için
                                doğru adres.
                            </p>
                            <div className="social-icons">
                                <a href="#">
                                    <i className="bi bi-facebook" />
                                </a>
                                <a href="#">
                                    <i className="bi bi-twitter" />
                                </a>
                                <a href="#">
                                    <i className="bi bi-instagram" />
                                </a>
                                <a href="#">
                                    <i className="bi bi-youtube" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-white mb-4">Hızlı Bağlantılar</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="/">Ana Sayfa</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/products">Ürünler</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-white mb-4">Yardım</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#">Sipariş Takibi</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#">İade ve Değişim</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#">Kargo Bilgileri</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#">Ödeme Seçenekleri</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#">S.S.S.</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-white mb-4">İletişim</h5>
                            <p>
                                <i className="bi bi-geo-alt me-2" /> Atatürk Cad. No:123, İstanbul
                            </p>
                            <p>
                                <i className="bi bi-telephone me-2" /> (0212) 123 45 67
                            </p>
                            <p>
                                <i className="bi bi-envelope me-2" /> info@modernshop.com
                            </p>
                            <div className="mt-4">
                                <img
                                    src="https://www.claudeusercontent.com/api/placeholder/240/40"
                                    alt="Ödeme Yöntemleri"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                    <hr className="my-4 bg-light" />
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-0">© 2025 ModernShop. Tüm hakları saklıdır.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="#">Gizlilik Politikası</a>
                                </li>
                                <li className="list-inline-item">
                                    <span>•</span>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">Kullanım Koşulları</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout;