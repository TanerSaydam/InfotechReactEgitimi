import '../styles/order.css';

function Order() {
    return (
        <>
            <div className="my-orders-container">
                <div className="container py-5">
                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb" className="mb-4">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#" className="text-decoration-none">
                                    Ana Sayfa
                                </a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#" className="text-decoration-none">
                                    Hesabım
                                </a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Siparişlerim
                            </li>
                        </ol>
                    </nav>
                    <div className="row">
                        {/* Left Sidebar - Account Navigation */}
                        <div className="col-lg-3 mb-4">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="account-avatar me-3">
                                            <div className="avatar-circle">
                                                <span className="avatar-initials">AY</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Ahmet Yılmaz</h5>
                                            <p className="text-muted mb-0 small">ahmet.yilmaz@email.com</p>
                                        </div>
                                    </div>
                                    <div className="account-nav">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2">
                                                <a
                                                    href="#"
                                                    className="nav-link p-2 d-flex align-items-center"
                                                >
                                                    <i className="bi bi-house-door me-3" />
                                                    Hesap Özeti
                                                </a>
                                            </li>
                                            <li className="mb-2">
                                                <a
                                                    href="#"
                                                    className="nav-link p-2 d-flex align-items-center active"
                                                >
                                                    <i className="bi bi-box-seam me-3" />
                                                    Siparişlerim
                                                </a>
                                            </li>
                                            <li className="mb-2">
                                                <a
                                                    href="#"
                                                    className="nav-link p-2 d-flex align-items-center"
                                                >
                                                    <i className="bi bi-heart me-3" />
                                                    Favori Ürünlerim
                                                </a>
                                            </li>
                                            <li className="mb-2">
                                                <a
                                                    href="#"
                                                    className="nav-link p-2 d-flex align-items-center"
                                                >
                                                    <i className="bi bi-geo-alt me-3" />
                                                    Adreslerim
                                                </a>
                                            </li>
                                            <li className="mb-2">
                                                <a
                                                    href="#"
                                                    className="nav-link p-2 d-flex align-items-center"
                                                >
                                                    <i className="bi bi-credit-card me-3" />
                                                    Ödeme Yöntemlerim
                                                </a>
                                            </li>
                                            <li className="mb-2">
                                                <a
                                                    href="#"
                                                    className="nav-link p-2 d-flex align-items-center"
                                                >
                                                    <i className="bi bi-bell me-3" />
                                                    Bildirimlerim
                                                </a>
                                            </li>
                                            <li className="mb-2">
                                                <a
                                                    href="#"
                                                    className="nav-link p-2 d-flex align-items-center"
                                                >
                                                    <i className="bi bi-person-gear me-3" />
                                                    Hesap Ayarlarım
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="nav-link p-2 d-flex align-items-center text-danger"
                                                >
                                                    <i className="bi bi-box-arrow-right me-3" />
                                                    Çıkış Yap
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Order Support Card */}
                            <div className="card border-0 shadow-sm mt-4">
                                <div className="card-body p-4">
                                    <h5 className="mb-3">Sipariş Desteği</h5>
                                    <p className="text-muted small mb-3">
                                        Siparişlerinizle ilgili sorun yaşıyor musunuz? Müşteri
                                        hizmetlerimize ulaşın.
                                    </p>
                                    <div className="d-grid">
                                        <a href="#" className="btn btn-outline-primary">
                                            <i className="bi bi-headset me-2" />
                                            Destek Al
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Main Content - Orders List */}
                        <div className="col-lg-9">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h1 className="h3 mb-0">Siparişlerim</h1>
                                {/* Order Filter */}
                                <div className="order-filter d-flex">
                                    <div className="dropdown me-2">
                                        <button
                                            className="btn btn-outline-secondary dropdown-toggle"
                                            type="button"
                                            id="orderFilterDropdown"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Tüm Siparişler
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="orderFilterDropdown"
                                        >
                                            <li>
                                                <a className="dropdown-item active" href="#">
                                                    Tüm Siparişler
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Bekleyen Siparişler
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Teslim Edilen Siparişler
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    İptal Edilen Siparişler
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    İade Edilen Siparişler
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Sipariş No ile Ara"
                                        />
                                        <button className="btn btn-outline-secondary" type="button">
                                            <i className="bi bi-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Orders Cards */}
                            <div className="orders-list">
                                {/* Order 1 - Active/Processing */}
                                <div className="card border-0 shadow-sm mb-4">
                                    <div className="card-header bg-white py-3">
                                        <div className="row align-items-center">
                                            <div className="col-md-4 mb-2 mb-md-0">
                                                <span className="text-muted small">Sipariş No:</span>
                                                <span className="fw-bold ms-1">MS-2025042112574</span>
                                            </div>
                                            <div className="col-md-3 mb-2 mb-md-0">
                                                <span className="text-muted small">Tarih:</span>
                                                <span className="ms-1">21.04.2025</span>
                                            </div>
                                            <div className="col-md-3 mb-2 mb-md-0">
                                                <span className="badge bg-primary">İşleniyor</span>
                                            </div>
                                            <div className="col-md-2 text-md-end">
                                                <button
                                                    className="btn btn-sm btn-link p-0"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#orderDetails1"
                                                    aria-expanded="false"
                                                    aria-controls="orderDetails1"
                                                >
                                                    Detaylar <i className="bi bi-chevron-down ms-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse" id="orderDetails1">
                                        <div className="card-body p-4">
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <h6 className="mb-2">Teslimat Bilgileri</h6>
                                                    <p className="text-muted mb-1">
                                                        Ahmet Yılmaz
                                                        <br />
                                                        Bahçelievler Mah. Çiçek Sok. No:12 D:5
                                                        <br />
                                                        Bahçelievler, İstanbul, 34188
                                                        <br />
                                                        Tel: 0532 123 45 67
                                                    </p>
                                                    <p className="mb-0 small">
                                                        <strong>Tahmini Teslimat:</strong> 23-25 Nisan 2025
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="mb-2">Ödeme Bilgileri</h6>
                                                    <p className="text-muted mb-1">
                                                        <span className="d-block">
                                                            Ödeme Yöntemi: <strong>Kredi Kartı</strong>
                                                        </span>
                                                        <span className="d-block">
                                                            Kart No: **** **** **** 1234
                                                        </span>
                                                        <span className="d-block">Ödeme Planı: Tek Çekim</span>
                                                    </p>
                                                    <div className="order-status-steps mt-3">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="text-center position-relative">
                                                                <span className="status-step completed">
                                                                    <i className="bi bi-check" />
                                                                </span>
                                                                <div className="small mt-1">Sipariş Alındı</div>
                                                            </div>
                                                            <div className="text-center position-relative">
                                                                <span className="status-step active">2</span>
                                                                <div className="small mt-1">Hazırlanıyor</div>
                                                            </div>
                                                            <div className="text-center position-relative">
                                                                <span className="status-step">3</span>
                                                                <div className="small mt-1">Kargoya Verildi</div>
                                                            </div>
                                                            <div className="text-center position-relative">
                                                                <span className="status-step">4</span>
                                                                <div className="small mt-1">Teslim Edildi</div>
                                                            </div>
                                                        </div>
                                                        <div className="progress mt-2" style={{ height: 4 }}>
                                                            <div
                                                                className="progress-bar"
                                                                role="progressbar"
                                                                style={{ width: "40%" }}
                                                                aria-valuenow={40}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="mb-3">Sipariş Edilen Ürünler</h6>
                                            <div className="table-responsive mb-3">
                                                <table className="table align-middle">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Ürün</th>
                                                            <th className="text-center">Miktar</th>
                                                            <th className="text-center">Birim Fiyat</th>
                                                            <th className="text-end">Toplam</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img
                                                                        src="https://www.claudeusercontent.com/api/placeholder/60/60"
                                                                        className="rounded me-3"
                                                                        alt="Ürün Görseli"
                                                                    />
                                                                    <div>
                                                                        <h6 className="mb-1">Kablosuz Kulaklık</h6>
                                                                        <p className="text-muted small mb-0">
                                                                            Renk: Siyah
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">1</td>
                                                            <td className="text-center">₺999</td>
                                                            <td className="text-end fw-bold">₺999</td>
                                                            <td className="text-end">
                                                                <button className="btn btn-sm btn-outline-primary">
                                                                    <i className="bi bi-cart-plus me-1" />
                                                                    Tekrar Al
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img
                                                                        src="https://www.claudeusercontent.com/api/placeholder/60/60"
                                                                        className="rounded me-3"
                                                                        alt="Ürün Görseli"
                                                                    />
                                                                    <div>
                                                                        <h6 className="mb-1">Akıllı Saat</h6>
                                                                        <p className="text-muted small mb-0">
                                                                            Renk: Gümüş
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">1</td>
                                                            <td className="text-center">₺1.899</td>
                                                            <td className="text-end fw-bold">₺1.899</td>
                                                            <td className="text-end">
                                                                <button className="btn btn-sm btn-outline-primary">
                                                                    <i className="bi bi-cart-plus me-1" />
                                                                    Tekrar Al
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img
                                                                        src="https://www.claudeusercontent.com/api/placeholder/60/60"
                                                                        className="rounded me-3"
                                                                        alt="Ürün Görseli"
                                                                    />
                                                                    <div>
                                                                        <h6 className="mb-1">Bluetooth Hoparlör</h6>
                                                                        <p className="text-muted small mb-0">
                                                                            Renk: Mavi
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">1</td>
                                                            <td className="text-center">₺799</td>
                                                            <td className="text-end fw-bold">₺799</td>
                                                            <td className="text-end">
                                                                <button className="btn btn-sm btn-outline-primary">
                                                                    <i className="bi bi-cart-plus me-1" />
                                                                    Tekrar Al
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td colSpan={3} className="text-end">
                                                                Ara Toplam:
                                                            </td>
                                                            <td className="text-end">₺3.697</td>
                                                            <td />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3} className="text-end">
                                                                Kargo:
                                                            </td>
                                                            <td className="text-end">₺29,99</td>
                                                            <td />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3} className="text-end text-success">
                                                                İndirim:
                                                            </td>
                                                            <td className="text-end text-success">-₺250</td>
                                                            <td />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3} className="text-end fw-bold">
                                                                Toplam:
                                                            </td>
                                                            <td className="text-end fw-bold">₺3.476,99</td>
                                                            <td />
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div className="mb-3 mb-md-0">
                                                    <button className="btn btn-outline-secondary me-2">
                                                        <i className="bi bi-printer me-1" />
                                                        Yazdır
                                                    </button>
                                                    <button className="btn btn-outline-secondary">
                                                        <i className="bi bi-download me-1" />
                                                        İndir
                                                    </button>
                                                </div>
                                                <div className="d-flex">
                                                    <button className="btn btn-outline-danger me-2">
                                                        <i className="bi bi-x-circle me-1" />
                                                        İptal Et
                                                    </button>
                                                    <button className="btn btn-primary">
                                                        <i className="bi bi-truck me-1" />
                                                        Takip Et
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Order 2 - Delivered */}
                                <div className="card border-0 shadow-sm mb-4">
                                    <div className="card-header bg-white py-3">
                                        <div className="row align-items-center">
                                            <div className="col-md-4 mb-2 mb-md-0">
                                                <span className="text-muted small">Sipariş No:</span>
                                                <span className="fw-bold ms-1">MS-2025030567891</span>
                                            </div>
                                            <div className="col-md-3 mb-2 mb-md-0">
                                                <span className="text-muted small">Tarih:</span>
                                                <span className="ms-1">05.03.2025</span>
                                            </div>
                                            <div className="col-md-3 mb-2 mb-md-0">
                                                <span className="badge bg-success">Teslim Edildi</span>
                                            </div>
                                            <div className="col-md-2 text-md-end">
                                                <button
                                                    className="btn btn-sm btn-link p-0"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#orderDetails2"
                                                    aria-expanded="false"
                                                    aria-controls="orderDetails2"
                                                >
                                                    Detaylar <i className="bi bi-chevron-down ms-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse" id="orderDetails2">
                                        <div className="card-body p-4">
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <h6 className="mb-2">Teslimat Bilgileri</h6>
                                                    <p className="text-muted mb-1">
                                                        Ahmet Yılmaz
                                                        <br />
                                                        Bahçelievler Mah. Çiçek Sok. No:12 D:5
                                                        <br />
                                                        Bahçelievler, İstanbul, 34188
                                                        <br />
                                                        Tel: 0532 123 45 67
                                                    </p>
                                                    <p className="mb-0 small text-success">
                                                        <strong>Teslim Tarihi:</strong> 07.03.2025
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="mb-2">Ödeme Bilgileri</h6>
                                                    <p className="text-muted mb-1">
                                                        <span className="d-block">
                                                            Ödeme Yöntemi: <strong>Kredi Kartı</strong>
                                                        </span>
                                                        <span className="d-block">
                                                            Kart No: **** **** **** 1234
                                                        </span>
                                                        <span className="d-block">Ödeme Planı: Tek Çekim</span>
                                                    </p>
                                                    <div className="order-status-steps mt-3">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="text-center position-relative">
                                                                <span className="status-step completed">
                                                                    <i className="bi bi-check" />
                                                                </span>
                                                                <div className="small mt-1">Sipariş Alındı</div>
                                                            </div>
                                                            <div className="text-center position-relative">
                                                                <span className="status-step completed">
                                                                    <i className="bi bi-check" />
                                                                </span>
                                                                <div className="small mt-1">Hazırlandı</div>
                                                            </div>
                                                            <div className="text-center position-relative">
                                                                <span className="status-step completed">
                                                                    <i className="bi bi-check" />
                                                                </span>
                                                                <div className="small mt-1">Kargoya Verildi</div>
                                                            </div>
                                                            <div className="text-center position-relative">
                                                                <span className="status-step completed">
                                                                    <i className="bi bi-check" />
                                                                </span>
                                                                <div className="small mt-1">Teslim Edildi</div>
                                                            </div>
                                                        </div>
                                                        <div className="progress mt-2" style={{ height: 4 }}>
                                                            <div
                                                                className="progress-bar bg-success"
                                                                role="progressbar"
                                                                style={{ width: "100%" }}
                                                                aria-valuenow={100}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="mb-3">Sipariş Edilen Ürünler</h6>
                                            <div className="table-responsive mb-3">
                                                <table className="table align-middle">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Ürün</th>
                                                            <th className="text-center">Miktar</th>
                                                            <th className="text-center">Birim Fiyat</th>
                                                            <th className="text-end">Toplam</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img
                                                                        src="https://www.claudeusercontent.com/api/placeholder/60/60"
                                                                        className="rounded me-3"
                                                                        alt="Ürün Görseli"
                                                                    />
                                                                    <div>
                                                                        <h6 className="mb-1">Akıllı Telefon Kılıfı</h6>
                                                                        <p className="text-muted small mb-0">
                                                                            Renk: Şeffaf
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">2</td>
                                                            <td className="text-center">₺149</td>
                                                            <td className="text-end fw-bold">₺298</td>
                                                            <td className="text-end">
                                                                <button className="btn btn-sm btn-outline-primary">
                                                                    <i className="bi bi-cart-plus me-1" />
                                                                    Tekrar Al
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img
                                                                        src="https://www.claudeusercontent.com/api/placeholder/60/60"
                                                                        className="rounded me-3"
                                                                        alt="Ürün Görseli"
                                                                    />
                                                                    <div>
                                                                        <h6 className="mb-1">Ekran Koruyucu Film</h6>
                                                                        <p className="text-muted small mb-0">
                                                                            Tip: Temperli Cam
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">1</td>
                                                            <td className="text-center">₺99</td>
                                                            <td className="text-end fw-bold">₺99</td>
                                                            <td className="text-end">
                                                                <button className="btn btn-sm btn-outline-primary">
                                                                    <i className="bi bi-cart-plus me-1" />
                                                                    Tekrar Al
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td colSpan={3} className="text-end">
                                                                Ara Toplam:
                                                            </td>
                                                            <td className="text-end">₺397</td>
                                                            <td />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3} className="text-end">
                                                                Kargo:
                                                            </td>
                                                            <td className="text-end">₺19,99</td>
                                                            <td />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3} className="text-end fw-bold">
                                                                Toplam:
                                                            </td>
                                                            <td className="text-end fw-bold">₺416,99</td>
                                                            <td />
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div className="mb-3 mb-md-0">
                                                    <button className="btn btn-outline-secondary me-2">
                                                        <i className="bi bi-printer me-1" />
                                                        Yazdır
                                                    </button>
                                                    <button className="btn btn-outline-secondary">
                                                        <i className="bi bi-download me-1" />
                                                        İndir
                                                    </button>
                                                </div>
                                                <div className="d-flex">
                                                    <button className="btn btn-outline-secondary me-2">
                                                        <i className="bi bi-star me-1" />
                                                        Değerlendir
                                                    </button>
                                                    <button className="btn btn-outline-primary">
                                                        <i className="bi bi-arrow-return-left me-1" />
                                                        İade Talebi
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Order 3 - Cancelled */}
                                <div className="card border-0 shadow-sm mb-4">
                                    <div className="card-header bg-white py-3">
                                        <div className="row align-items-center">
                                            <div className="col-md-4 mb-2 mb-md-0">
                                                <span className="text-muted small">Sipariş No:</span>
                                                <span className="fw-bold ms-1">MS-2025011234567</span>
                                            </div>
                                            <div className="col-md-3 mb-2 mb-md-0">
                                                <span className="text-muted small">Tarih:</span>
                                                <span className="ms-1">10.01.2025</span>
                                            </div>
                                            <div className="col-md-3 mb-2 mb-md-0">
                                                <span className="badge bg-danger">İptal Edildi</span>
                                            </div>
                                            <div className="col-md-2 text-md-end">
                                                <button
                                                    className="btn btn-sm btn-link p-0"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#orderDetails3"
                                                    aria-expanded="false"
                                                    aria-controls="orderDetails3"
                                                >
                                                    Detaylar <i className="bi bi-chevron-down ms-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse" id="orderDetails3">
                                        <div className="card-body p-4">
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <h6 className="mb-2">Teslimat Bilgileri</h6>
                                                    <p className="text-muted mb-1">
                                                        Ahmet Yılmaz
                                                        <br />
                                                        Bahçelievler Mah. Çiçek Sok. No:12 D:5
                                                        <br />
                                                        Bahçelievler, İstanbul, 34188
                                                        <br />
                                                        Tel: 0532 123 45 67
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="mb-2">İptal Bilgileri</h6>
                                                    <p className="text-muted mb-1">
                                                        <span className="d-block">
                                                            İptal Tarihi: <strong>11.01.2025</strong>
                                                        </span>
                                                        <span className="d-block">
                                                            İptal Nedeni: <strong>Müşteri İsteği</strong>
                                                        </span>
                                                        <span className="d-block">
                                                            İade Durumu: <strong>İade Tamamlandı</strong>
                                                        </span>
                                                    </p>
                                                    <div
                                                        className="alert alert-light mt-3 mb-0 small"
                                                        role="alert"
                                                    >
                                                        <i className="bi bi-info-circle me-2" />
                                                        İptal ettiğiniz sipariş tutarı, ödeme yaptığınız karta
                                                        iade edilmiştir. İade işleminin kartınıza yansıması 3-7 iş
                                                        günü sürebilir.
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="mb-3">Sipariş Edilen Ürünler</h6>
                                            <div className="table-responsive mb-3">
                                                <table className="table align-middle">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Ürün</th>
                                                            <th className="text-center">Miktar</th>
                                                            <th className="text-center">Birim Fiyat</th>
                                                            <th className="text-end">Toplam</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img
                                                                        src="https://www.claudeusercontent.com/api/placeholder/60/60"
                                                                        className="rounded me-3"
                                                                        alt="Ürün Görseli"
                                                                    />
                                                                    <div>
                                                                        <h6 className="mb-1">Akıllı Robot Süpürge</h6>
                                                                        <p className="text-muted small mb-0">
                                                                            Renk: Beyaz
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">1</td>
                                                            <td className="text-center">₺4.599</td>
                                                            <td className="text-end fw-bold">₺4.599</td>
                                                            <td className="text-end">
                                                                <button className="btn btn-sm btn-outline-primary">
                                                                    <i className="bi bi-cart-plus me-1" />
                                                                    Tekrar Al
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td colSpan={3} className="text-end">
                                                                Ara Toplam:
                                                            </td>
                                                            <td className="text-end">₺4.599</td>
                                                            <td />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3} className="text-end">
                                                                Kargo:
                                                            </td>
                                                            <td className="text-end">₺0</td>
                                                            <td />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3} className="text-end fw-bold">
                                                                Toplam:
                                                            </td>
                                                            <td className="text-end fw-bold">₺4.599</td>
                                                            <td />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3} className="text-end text-danger">
                                                                İade Tutarı:
                                                            </td>
                                                            <td className="text-end text-danger">-₺4.599</td>
                                                            <td />
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div className="mb-3 mb-md-0">
                                                    <button className="btn btn-outline-secondary me-2">
                                                        <i className="bi bi-printer me-1" />
                                                        Yazdır
                                                    </button>
                                                    <button className="btn btn-outline-secondary">
                                                        <i className="bi bi-download me-1" />
                                                        İndir
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className="btn btn-primary">
                                                        <i className="bi bi-headset me-1" />
                                                        Destek Al
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Pagination */}
                                <nav aria-label="Sipariş sayfaları" className="mt-4">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a
                                                className="page-link"
                                                href="#"
                                                tabIndex={-1}
                                                aria-disabled="true"
                                            >
                                                Önceki
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                Sonraki
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Order;