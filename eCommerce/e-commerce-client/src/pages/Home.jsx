import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useCountStore } from "../states/count.state";

function Home() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const { inc } = useCountStore();

    function formatToTRY(value) {
        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', minimumFractionDigits: 2 }).format(value);
    }

    async function getCategories() {
        const response = await axios.get("https://localhost:7159/categories");
        setCategories(response.data);
    };

    async function getProducts() {
        const response = await axios.get("https://localhost:7159/products?pageSize=8&pageNumber=1&orderByPrice=asc");
        setProducts(response.data.data);
    };


    async function addBasket(productId) {
        const token = localStorage.getItem("token");
        if(!token){
            navigate("/login");
            return;
        }

        try {
            var res = await axios.post("https://localhost:7159/carts", {productId: productId},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert(res.data.data);
            inc();
        } catch (error) {
            console.log(error);
            alert("Bir hata oluştu");
        }
    }

    useEffect(() => {
        getCategories();
        getProducts();
    },[]);

    return (
        <>
            {/* Hero Section with Carousel */}
            <div className="hero-section">
                <div className="container">
                    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators" style={{backgroundColor: "#291414"}}>
                            <button
                                type="button"
                                data-bs-target="#heroCarousel"
                                data-bs-slide-to={0}
                                className="active"
                            />
                            <button
                                type="button"
                                data-bs-target="#heroCarousel"
                                data-bs-slide-to={1}
                            />
                            <button
                                type="button"
                                data-bs-target="#heroCarousel"
                                data-bs-slide-to={2}
                            />
                        </div>
                        <div className="carousel-inner rounded shadow">
                            <div className="carousel-item active">
                                <img
                                    src="/cover1.jpg"
                                    className="d-block w-100"
                                    alt="Kampanya 1"
                                    style={{objectFit: "contain"}}
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2>Yaz Koleksiyonu</h2>
                                    <p>Yeni sezona özel tabletlerde %50'ye varan indirimler</p>
                                    <Link to="/products/tabletler" className="btn btn-primary">
                                        Alışverişe Başla
                                    </Link>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="/cover2.png"
                                    className="d-block w-100"
                                    alt="Kampanya 2"
                                    style={{objectFit: "contain"}}
                                />
                                <div className="carousel-caption d-none d-md-block" style={{color: "black"}}>
                                    <h2>Elektronik Fırsatları</h2>
                                    <p>En son teknoloji toprak korumalı prizlerde özel fiyatlar</p>
                                    <Link to="/products/elektronik" className="btn btn-primary">
                                        Alışverişe Başla
                                    </Link>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch_GEO_EMEA_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4K0VvSjFQM0pLN0VsK2pmbVJmK1hUZDhiZjRKRUJ6ZU96N3VHVCtXdS9WdVUzdWN4ZENIZEJCc01VOW1QK3BzTGVNdlIyKy9FMURXQmRzdk1KZVhnSDh1WjFlQndWT3ZmeW5zc3dRUHliS2dB&traceId=1"
                                    className="d-block w-100"
                                    alt="Kampanya 3"
                                    style={{objectFit: "contain"}}
                                />
                                <div className="carousel-caption d-none d-md-block" style={{color: "black"}}>
                                    <h2>Telefon</h2>
                                    <p>Telefonlarda kaçırılmayacak fırsatlar</p>
                                    <Link to="/products/telefonlar" className="btn btn-primary">
                                        Alışverişe Başla
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#heroCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" />
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#heroCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Categories Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Popüler Kategoriler</h2>
                <div className="row">
                    {categories.map((val,i) => {
                       return(
                       <div className="col-6 col-md-4 col-lg-3" key={i}>
                        <Link to={"/products/" + val.urlShortName}>
                            <div className="category-item shadow-sm">
                                <img
                                    src={"https://localhost:7159/images/categories/" + val.imageUrl}
                                    className="img-fluid"
                                    alt={val.name}
                                    style={{ width: "300px", height: "300px", objectFit: "cover" }}
                                />
                                <div className="category-overlay">
                                    <h5 className="m-0">{val.name}</h5>
                                </div>
                            </div>
                        </Link>
                        </div>
                        )
                    })}
                </div>
            </div>
            {/* Featured Products */}
            <div className="container my-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Ürünler</h2>
                    <Link to="/products" className="btn btn-outline-primary">
                        Tümünü Gör
                    </Link>
                </div>
                <div className="row">
                    {products.map((val,i) => {
                        return(
                            <div className="col-md-6 col-lg-3 mt-2" key={i}>
                                <div className="card product-card h-100">
                                    <div className="position-absolute top-0 end-0 p-2">
                                        <span className="badge bg-danger">-20%</span>
                                    </div>
                                    <img
                                        src={"https://localhost:7159/images/products/" + val.imageUrl}
                                        className="card-img-top"
                                        alt="Ürün 1"
                                        style={{ width: "300px", height: "300px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <div style={{ height: "60px" }}>
                                            <h5 className="card-title">{val.name}</h5>
                                        </div>
                                        <div className="d-flex flex-column mb-2">
                                            <div className="text-warning d-flex justify-content-between align-items-center">
                                                <div>
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-half" />
                                                </div>
                                                <small className="text-muted">(120)</small>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="text-decoration-line-through text-muted me-2">
                                                    {formatToTRY(val.price * 1.2)}
                                                </span>
                                                <span className="fw-bold text-danger">{formatToTRY(val.price)}</span>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary w-100" onClick={() => addBasket(val.id)}>Sepete Ekle</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })};
                </div>
            </div>
            {/* Features */}
            <div className="container my-5">
                <div className="row text-center g-4">
                    <div className="col-md-3">
                        <div className="p-3">
                            <i className="bi bi-truck fs-1 text-primary mb-3" />
                            <h5>Ücretsiz Kargo</h5>
                            <p className="text-muted">250₺ üzeri siparişlerde ücretsiz kargo</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3">
                            <i className="bi bi-shield-check fs-1 text-primary mb-3" />
                            <h5>Güvenli Ödeme</h5>
                            <p className="text-muted">256-bit SSL ile güvenli ödeme</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3">
                            <i className="bi bi-arrow-return-left fs-1 text-primary mb-3" />
                            <h5>14 Gün İade</h5>
                            <p className="text-muted">Koşulsuz iade garantisi</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3">
                            <i className="bi bi-headset fs-1 text-primary mb-3" />
                            <h5>7/24 Destek</h5>
                            <p className="text-muted">Her zaman yanınızdayız</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;