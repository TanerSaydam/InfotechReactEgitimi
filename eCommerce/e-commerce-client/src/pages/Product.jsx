import '../styles/product.css';

function Product() {
    return (
        <>
            <>
                <section className="breadcrumb-section">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="#" className="text-decoration-none">
                                        Ana Sayfa
                                    </a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Elektronik
                                </li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/* Category Banner */}
                <div className="category-banner">
                    <div className="container text-center">
                        <h1 className="display-4 fw-bold">Elektronik</h1>
                        <p className="lead">En son teknoloji ürünleri ve elektronik cihazlar</p>
                    </div>
                </div>
                {/* Product Listing Section */}
                <div className="container mb-5">
                    <div className="row">
                        {/* Filter Section (For Mobile - Hidden by default) */}
                        <div className="filter-backdrop" id="filterBackdrop" />
                        <div className="col-md-4">
                            <div className="filter-section" id="filterSection">
                                <button
                                    className="btn btn-sm btn-close filter-close d-lg-none"
                                    id="filterClose"
                                />
                                <div className="card border-0 shadow-sm p-3 d-lg-none mb-3">
                                    <h5 className="mb-0">Filtreler</h5>
                                </div>
                                {/* Filter Content */}
                                <div className="card border-0 shadow-sm filter-card">
                                    {/* Subcategories */}
                                    <div className="card-body p-0">
                                        <div
                                            className="filter-header"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#subcategoriesCollapse"
                                        >
                                            <h5 className="mb-0">Alt Kategoriler</h5>
                                            <i className="bi bi-chevron-down" />
                                        </div>
                                        <div className="collapse show" id="subcategoriesCollapse">
                                            <div className="filter-body">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="subcategory-item active">
                                                        <a href="#" className="text-decoration-none d-block">
                                                            Tüm Elektronik
                                                        </a>
                                                    </li>
                                                    <li className="subcategory-item">
                                                        <a href="#" className="text-decoration-none d-block">
                                                            Telefonlar
                                                        </a>
                                                    </li>
                                                    <li className="subcategory-item">
                                                        <a href="#" className="text-decoration-none d-block">
                                                            Bilgisayarlar
                                                        </a>
                                                    </li>
                                                    <li className="subcategory-item">
                                                        <a href="#" className="text-decoration-none d-block">
                                                            Tabletler
                                                        </a>
                                                    </li>
                                                    <li className="subcategory-item">
                                                        <a href="#" className="text-decoration-none d-block">
                                                            Kulaklıklar
                                                        </a>
                                                    </li>
                                                    <li className="subcategory-item">
                                                        <a href="#" className="text-decoration-none d-block">
                                                            Akıllı Saatler
                                                        </a>
                                                    </li>
                                                    <li className="subcategory-item">
                                                        <a href="#" className="text-decoration-none d-block">
                                                            Bluetooth Hoparlörler
                                                        </a>
                                                    </li>
                                                    <li className="subcategory-item">
                                                        <a href="#" className="text-decoration-none d-block">
                                                            Kameralar
                                                        </a>
                                                    </li>
                                                    <li className="subcategory-item">
                                                        <a href="#" className="text-decoration-none d-block">
                                                            Televizyonlar
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Price Range */}
                                    <div className="card-body p-0">
                                        <div
                                            className="filter-header"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#priceCollapse"
                                        >
                                            <h5 className="mb-0">Fiyat Aralığı</h5>
                                            <i className="bi bi-chevron-down" />
                                        </div>
                                        <div className="collapse show" id="priceCollapse">
                                            <div className="filter-body">
                                                <div className="price-range">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm price-input"
                                                        placeholder="Min"
                                                    />
                                                    <span className="mx-2">-</span>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm price-input"
                                                        placeholder="Max"
                                                    />
                                                    <button className="btn btn-sm btn-outline-primary ms-2">
                                                        Uygula
                                                    </button>
                                                </div>
                                                <div className="mt-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="price1"
                                                        />
                                                        <label className="form-check-label" htmlFor="price1">
                                                            0 - 1000 ₺
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="price2"
                                                        />
                                                        <label className="form-check-label" htmlFor="price2">
                                                            1000 - 3000 ₺
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="price3"
                                                        />
                                                        <label className="form-check-label" htmlFor="price3">
                                                            3000 - 5000 ₺
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="price4"
                                                        />
                                                        <label className="form-check-label" htmlFor="price4">
                                                            5000 ₺ ve üzeri
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Brands */}
                                    <div className="card-body p-0">
                                        <div
                                            className="filter-header"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#brandsCollapse"
                                        >
                                            <h5 className="mb-0">Markalar</h5>
                                            <i className="bi bi-chevron-down" />
                                        </div>
                                        <div className="collapse show" id="brandsCollapse">
                                            <div className="filter-body">
                                                <div className="mb-2">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        placeholder="Marka Ara"
                                                    />
                                                </div>
                                                <div className="mt-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand1"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand1">
                                                            Apple
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand2"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand2">
                                                            Samsung
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand3"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand3">
                                                            Xiaomi
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand4"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand4">
                                                            Sony
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand5"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand5">
                                                            Huawei
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand6"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand6">
                                                            Lenovo
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Rating */}
                                    <div className="card-body p-0">
                                        <div
                                            className="filter-header"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#ratingCollapse"
                                        >
                                            <h5 className="mb-0">Değerlendirme</h5>
                                            <i className="bi bi-chevron-down" />
                                        </div>
                                        <div className="collapse show" id="ratingCollapse">
                                            <div className="filter-body">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="rating5"
                                                    />
                                                    <label className="form-check-label" htmlFor="rating5">
                                                        <span className="rating-stars">
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                        </span>
                                                        <span className="text-muted ms-1">(5.0)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="rating4"
                                                    />
                                                    <label className="form-check-label" htmlFor="rating4">
                                                        <span className="rating-stars">
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star" />
                                                        </span>
                                                        <span className="text-muted ms-1">(4.0+)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="rating3"
                                                    />
                                                    <label className="form-check-label" htmlFor="rating3">
                                                        <span className="rating-stars">
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star" />
                                                            <i className="bi bi-star" />
                                                        </span>
                                                        <span className="text-muted ms-1">(3.0+)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="rating2"
                                                    />
                                                    <label className="form-check-label" htmlFor="rating2">
                                                        <span className="rating-stars">
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star" />
                                                            <i className="bi bi-star" />
                                                            <i className="bi bi-star" />
                                                        </span>
                                                        <span className="text-muted ms-1">(2.0+)</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Features */}
                                    <div className="card-body p-0">
                                        <div
                                            className="filter-header"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#featuresCollapse"
                                        >
                                            <h5 className="mb-0">Özellikler</h5>
                                            <i className="bi bi-chevron-down" />
                                        </div>
                                        <div className="collapse show" id="featuresCollapse">
                                            <div className="filter-body">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="feature1"
                                                    />
                                                    <label className="form-check-label" htmlFor="feature1">
                                                        İndirimli
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="feature2"
                                                    />
                                                    <label className="form-check-label" htmlFor="feature2">
                                                        Yeni Ürün
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="feature3"
                                                    />
                                                    <label className="form-check-label" htmlFor="feature3">
                                                        Ücretsiz Kargo
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="feature4"
                                                    />
                                                    <label className="form-check-label" htmlFor="feature4">
                                                        Hızlı Teslimat
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="feature5"
                                                    />
                                                    <label className="form-check-label" htmlFor="feature5">
                                                        Stokta Var
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Filter Buttons (Mobile Only) */}
                                    <div className="d-flex justify-content-between p-3 d-lg-none">
                                        <button className="btn btn-outline-secondary w-100 me-2">
                                            Temizle
                                        </button>
                                        <button className="btn btn-primary w-100" id="applyFilterMobile">
                                            Uygula
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Products Section */}
                        <div className="col-md-8">
                            {/* Top Bar - Sort and Filter */}
                            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                                <div className="d-flex align-items-center mb-3 mb-md-0">
                                    <span className="me-2 text-muted">245 Ürün</span>
                                    <button
                                        className="btn btn-outline-secondary btn-sm d-lg-none"
                                        id="filterButton"
                                    >
                                        <i className="bi bi-filter me-1" />
                                        Filtrele
                                    </button>
                                </div>
                                <div className="sort-section d-flex align-items-center">
                                    <span className="me-2 text-muted d-none d-md-block">Sırala:</span>
                                    <div className="d-flex">
                                        <div className="sort-item active me-2">Önerilen</div>
                                        <div className="sort-item me-2">En Yeniler</div>
                                        <div className="sort-item me-2">En Çok Satanlar</div>
                                        <div className="sort-item me-2">Fiyat: Artan</div>
                                        <div className="sort-item">Fiyat: Azalan</div>
                                    </div>
                                </div>
                            </div>
                            {/* Products Grid */}
                            <div className="row g-3">
                                {/* Product 1 */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="card product-card h-100">
                                        <div className="badge-discount">
                                            <span className="badge bg-danger">%20</span>
                                        </div>
                                        <div className="position-relative">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                                className="card-img-top"
                                                alt="Kablosuz Kulaklık"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Kablosuz Kulaklık</h5>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div>
                                                    <span className="text-decoration-line-through text-muted me-2">
                                                        ₺1.250
                                                    </span>
                                                    <span className="fw-bold text-danger">₺999</span>
                                                </div>
                                                <div className="rating-stars">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-half" />
                                                    <small className="text-muted">(120)</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-muted small mb-3">
                                                Aktif gürültü engelleme, 30 saat pil ömrü
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-success">Ücretsiz Kargo</span>
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-cart-plus me-1" />
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product 2 */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="card product-card h-100">
                                        <div className="badge-new">
                                            <span className="badge bg-primary">Yeni</span>
                                        </div>
                                        <div className="position-relative">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                                className="card-img-top"
                                                alt="Akıllı Saat"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Akıllı Saat</h5>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div>
                                                    <span className="fw-bold">₺1.899</span>
                                                </div>
                                                <div className="rating-stars">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star" />
                                                    <small className="text-muted">(84)</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-muted small mb-3">
                                                Nabız ölçer, uyku takibi, su geçirmez
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-success">Ücretsiz Kargo</span>
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-cart-plus me-1" />
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product 3 */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="card product-card h-100">
                                        <div className="position-relative">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                                className="card-img-top"
                                                alt="Akıllı Telefon"
                                            />
                                            <div className="stock-status">
                                                <span className="badge bg-secondary p-2">Tükendi</span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Akıllı Telefon</h5>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div>
                                                    <span className="fw-bold">₺12.499</span>
                                                </div>
                                                <div className="rating-stars">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <small className="text-muted">(215)</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-muted small mb-3">
                                                6.7" ekran, 128GB dahili hafıza, 8GB RAM
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-success">Ücretsiz Kargo</span>
                                                <button className="btn btn-secondary btn-sm" disabled="">
                                                    <i className="bi bi-bell me-1" />
                                                    Haber Ver
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product 4 */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="card product-card h-100">
                                        <div className="badge-discount">
                                            <span className="badge bg-danger">%10</span>
                                        </div>
                                        <div className="position-relative">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                                className="card-img-top"
                                                alt="Bluetooth Hoparlör"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Bluetooth Hoparlör</h5>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div>
                                                    <span className="text-decoration-line-through text-muted me-2">
                                                        ₺899
                                                    </span>
                                                    <span className="fw-bold text-danger">₺799</span>
                                                </div>
                                                <div className="rating-stars">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star" />
                                                    <i className="bi bi-star" />
                                                    <small className="text-muted">(67)</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-muted small mb-3">
                                                Suya dayanıklı, 20 saat pil ömrü, güçlü bas
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-success">Ücretsiz Kargo</span>
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-cart-plus me-1" />
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product 5 */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="card product-card h-100">
                                        <div className="position-relative">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                                className="card-img-top"
                                                alt="Kamera"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Dijital Kamera</h5>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div>
                                                    <span className="fw-bold">₺4.299</span>
                                                </div>
                                                <div className="rating-stars">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-half" />
                                                    <small className="text-muted">(42)</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-muted small mb-3">
                                                24MP, 4K video kaydı, optik zoom
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-success">Ücretsiz Kargo</span>
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-cart-plus me-1" />
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product 6 */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="card product-card h-100">
                                        <div className="badge-new">
                                            <span className="badge bg-primary">Yeni</span>
                                        </div>
                                        <div className="position-relative">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                                className="card-img-top"
                                                alt="Kablosuz Şarj"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Kablosuz Şarj Standı</h5>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div>
                                                    <span className="fw-bold">₺349</span>
                                                </div>
                                                <div className="rating-stars">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star" />
                                                    <small className="text-muted">(18)</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-muted small mb-3">
                                                15W hızlı şarj, çoklu cihaz desteği
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-secondary">Kargo: ₺19.99</span>
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-cart-plus me-1" />
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product 7 */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="card product-card h-100">
                                        <div className="badge-discount">
                                            <span className="badge bg-danger">%15</span>
                                        </div>
                                        <div className="position-relative">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                                className="card-img-top"
                                                alt="Tablet"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Tablet</h5>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div>
                                                    <span className="text-decoration-line-through text-muted me-2">
                                                        ₺3.499
                                                    </span>
                                                    <span className="fw-bold text-danger">₺2.974</span>
                                                </div>
                                                <div className="rating-stars">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star" />
                                                    <small className="text-muted">(92)</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-muted small mb-3">
                                                10.5" ekran, 64GB, Wi-Fi, kalem desteği
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-success">Ücretsiz Kargo</span>
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-cart-plus me-1" />
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product 8 */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="card product-card h-100">
                                        <div className="position-relative">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                                className="card-img-top"
                                                alt="Laptop"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Taşınabilir Bilgisayar</h5>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div>
                                                    <span className="fw-bold">₺9.750</span>
                                                </div>
                                                <div className="rating-stars">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-half" />
                                                    <small className="text-muted">(156)</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-muted small mb-3">
                                                15.6" FHD, 16GB RAM, 512GB SSD, i7 işlemci
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-success">Ücretsiz Kargo</span>
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-cart-plus me-1" />
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product 9 */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="card product-card h-100">
                                        <div className="position-relative">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/300/300"
                                                className="card-img-top"
                                                alt="Akıllı Saat"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">TV Kutusu</h5>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div>
                                                    <span className="fw-bold">₺599</span>
                                                </div>
                                                <div className="rating-stars">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star" />
                                                    <i className="bi bi-star" />
                                                    <small className="text-muted">(47)</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-muted small mb-3">
                                                4K streaming, Android TV, Wi-Fi, bluetooth
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-secondary">Kargo: ₺19.99</span>
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-cart-plus me-1" />
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* More products would continue here */}
                            </div>
                            {/* Pagination */}
                            <nav aria-label="Page navigation" className="mt-5">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a
                                            className="page-link"
                                            href="#"
                                            tabIndex={-1}
                                            aria-disabled="true"
                                        >
                                            <i className="bi bi-chevron-left" />
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
                                            <i className="bi bi-chevron-right" />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default Product;