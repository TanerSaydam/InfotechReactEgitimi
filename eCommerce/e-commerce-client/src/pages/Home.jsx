import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
    const [categories, setCategories] = useState([]);

    async function getCategories() {
        const response = await axios.get("https://localhost:7159/categories");
        setCategories(response.data);
    };

    useEffect(() => {
        getCategories();
    },[]);

    return (
        <>
            {/* Hero Section with Carousel */}
            <div className="hero-section">
                <div className="container">
                    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
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
                                    src="https://www.claudeusercontent.com/api/placeholder/1200/400"
                                    className="d-block w-100"
                                    alt="Kampanya 1"
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2>Yaz Koleksiyonu</h2>
                                    <p>Yeni sezon ürünlerde %50'ye varan indirimler</p>
                                    <a href="#" className="btn btn-primary">
                                        Hemen Keşfet
                                    </a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://www.claudeusercontent.com/api/placeholder/1200/400"
                                    className="d-block w-100"
                                    alt="Kampanya 2"
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2>Elektronik Fırsatları</h2>
                                    <p>En son teknoloji ürünlerde özel fiyatlar</p>
                                    <a href="#" className="btn btn-primary">
                                        Alışverişe Başla
                                    </a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://www.claudeusercontent.com/api/placeholder/1200/400"
                                    className="d-block w-100"
                                    alt="Kampanya 3"
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2>Ev Dekorasyon</h2>
                                    <p>Evinizi yenilemenin tam zamanı</p>
                                    <a href="#" className="btn btn-primary">
                                        Detaylar
                                    </a>
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
                       return(<div className="col-6 col-md-4 col-lg-3" key={i}>
                            <div className="category-item shadow-sm">
                                <img
                                    src={"https://localhost:7159/images/" + val.imageUrl}
                                    className="img-fluid"
                                    alt={val.name}
                                    style={{ width: "300px", height: "300px", objectFit: "cover" }}
                                />
                                <div className="category-overlay">
                                    <h5 className="m-0">{val.name}</h5>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
            {/* Featured Products */}
            <div className="container my-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Öne Çıkan Ürünler</h2>
                    <a href="#" className="btn btn-outline-primary">
                        Tümünü Gör
                    </a>
                </div>
                <div className="row">
                    {/* Product 1 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="card product-card h-100">
                            <div className="position-absolute top-0 end-0 p-2">
                                <span className="badge bg-danger">-20%</span>
                            </div>
                            <img
                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                className="card-img-top"
                                alt="Ürün 1"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Kablosuz Kulaklık</h5>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span className="text-decoration-line-through text-muted me-2">
                                            ₺1.250
                                        </span>
                                        <span className="fw-bold text-danger">₺999</span>
                                    </div>
                                    <div className="text-warning">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                        <small className="text-muted">(120)</small>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100">Sepete Ekle</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="card product-card h-100">
                            <img
                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                className="card-img-top"
                                alt="Ürün 2"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Akıllı Saat</h5>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span className="fw-bold">₺1.899</span>
                                    </div>
                                    <div className="text-warning">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star" />
                                        <small className="text-muted">(84)</small>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100">Sepete Ekle</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="card product-card h-100">
                            <div className="position-absolute top-0 end-0 p-2">
                                <span className="badge bg-success">Yeni</span>
                            </div>
                            <img
                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                className="card-img-top"
                                alt="Ürün 3"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Akıllı Telefon</h5>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span className="fw-bold">₺12.499</span>
                                    </div>
                                    <div className="text-warning">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <small className="text-muted">(215)</small>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100">Sepete Ekle</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 4 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="card product-card h-100">
                            <img
                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                className="card-img-top"
                                alt="Ürün 4"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Bluetooth Hoparlör</h5>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span className="fw-bold">₺799</span>
                                    </div>
                                    <div className="text-warning">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                        <small className="text-muted">(67)</small>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100">Sepete Ekle</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Special Offer Banner */}
            <div className="special-offer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className="display-5 fw-bold mb-3">Özel Kampanya</h2>
                            <p className="lead mb-4">
                                2 ürün alana 3. ürün bedava! Bu fırsatı kaçırmayın.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="#" className="btn btn-light btn-lg">
                                    Kampanya Detayları
                                </a>
                                <a href="#" className="btn btn-outline-light btn-lg">
                                    Alışverişe Başla
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="rounded bg-white p-3 shadow mt-4 mt-md-0">
                                <div className="row justify-content-center">
                                    <div className="col-3">
                                        <div className="bg-light rounded-circle p-3 mb-2">
                                            <h3 className="m-0">12</h3>
                                        </div>
                                        <p className="small">Gün</p>
                                    </div>
                                    <div className="col-3">
                                        <div className="bg-light rounded-circle p-3 mb-2">
                                            <h3 className="m-0">03</h3>
                                        </div>
                                        <p className="small">Saat</p>
                                    </div>
                                    <div className="col-3">
                                        <div className="bg-light rounded-circle p-3 mb-2">
                                            <h3 className="m-0">45</h3>
                                        </div>
                                        <p className="small">Dakika</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* New Arrivals */}
            <div className="container my-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Yeni Gelenler</h2>
                    <a href="#" className="btn btn-outline-primary">
                        Tümünü Gör
                    </a>
                </div>
                <div className="row">
                    {/* Product 1 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="card product-card h-100">
                            <div className="position-absolute top-0 end-0 p-2">
                                <span className="badge bg-success">Yeni</span>
                            </div>
                            <img
                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                className="card-img-top"
                                alt="Yeni Ürün 1"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Spor Ayakkabı</h5>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span className="fw-bold">₺1.299</span>
                                    </div>
                                    <div className="text-warning">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star" />
                                        <small className="text-muted">(23)</small>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100">Sepete Ekle</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="card product-card h-100">
                            <div className="position-absolute top-0 end-0 p-2">
                                <span className="badge bg-success">Yeni</span>
                            </div>
                            <img
                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                className="card-img-top"
                                alt="Yeni Ürün 2"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Kahve Makinesi</h5>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span className="fw-bold">₺2.499</span>
                                    </div>
                                    <div className="text-warning">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                        <i className="bi bi-star" />
                                        <small className="text-muted">(15)</small>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100">Sepete Ekle</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="card product-card h-100">
                            <div className="position-absolute top-0 end-0 p-2">
                                <span className="badge bg-success">Yeni</span>
                            </div>
                            <img
                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                className="card-img-top"
                                alt="Yeni Ürün 3"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Akıllı Robot Süpürge</h5>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span className="fw-bold">₺4.999</span>
                                    </div>
                                    <div className="text-warning">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <small className="text-muted">(8)</small>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100">Sepete Ekle</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 4 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="card product-card h-100">
                            <div className="position-absolute top-0 end-0 p-2">
                                <span className="badge bg-success">Yeni</span>
                            </div>
                            <img
                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                className="card-img-top"
                                alt="Yeni Ürün 4"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Yoga Matı</h5>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span className="fw-bold">₺349</span>
                                    </div>
                                    <div className="text-warning">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                        <small className="text-muted">(31)</small>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100">Sepete Ekle</button>
                            </div>
                        </div>
                    </div>
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
            {/* Newsletter */}
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card border-0 shadow">
                            <div className="card-body p-4">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <h3>Bültenimize Abone Olun</h3>
                                        <p className="text-muted mb-md-0">
                                            En son kampanyalardan ve indirimlerden haberdar olun.
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <form className="newsletter-form d-flex">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="E-posta adresiniz"
                                            />
                                            <button className="btn btn-primary px-4">Abone Ol</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;