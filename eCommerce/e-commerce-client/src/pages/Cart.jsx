function Cart() {
    return (
        <>
            <>
                {/* Breadcrumb */}
                <section className="breadcrumb-section">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="#">Ana Sayfa</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Sepetim
                                </li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/* Cart Section */}
                <section className="cart-section">
                    <div className="container">
                        <h1 className="mb-4">Alışveriş Sepetim</h1>
                        <div className="row">
                            <div className="col-lg-8">
                                {/* Cart Items */}
                                <div className="card mb-4">
                                    <div className="card-header bg-white">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <h5 className="mb-0">Ürünler (3)</h5>
                                            </div>
                                            <div className="col-6 text-end">
                                                <button className="btn btn-sm btn-outline-secondary">
                                                    Sepeti Temizle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table table-borderless align-middle mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col">Ürün</th>
                                                        <th scope="col" className="text-center">
                                                            Fiyat
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            Adet
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            Toplam
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            İşlem
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* Cart Item 1 */}
                                                    <tr className="cart-item">
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="https://www.claudeusercontent.com/api/placeholder/80/80"
                                                                    className="product-image rounded"
                                                                    alt="Kablosuz Kulaklık"
                                                                />
                                                                <div className="ms-3">
                                                                    <h6 className="mb-1">Kablosuz Kulaklık</h6>
                                                                    <small className="text-muted">Renk: Siyah</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="fw-bold">₺999</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="input-group quantity-selector mx-auto">
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue={1}
                                                                />
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="fw-bold">₺999</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="bi bi-trash remove-item" />
                                                        </td>
                                                    </tr>
                                                    {/* Cart Item 2 */}
                                                    <tr className="cart-item">
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="https://www.claudeusercontent.com/api/placeholder/80/80"
                                                                    className="product-image rounded"
                                                                    alt="Akıllı Saat"
                                                                />
                                                                <div className="ms-3">
                                                                    <h6 className="mb-1">Akıllı Saat</h6>
                                                                    <small className="text-muted">Renk: Gümüş</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="fw-bold">₺1.899</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="input-group quantity-selector mx-auto">
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue={1}
                                                                />
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="fw-bold">₺1.899</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="bi bi-trash remove-item" />
                                                        </td>
                                                    </tr>
                                                    {/* Cart Item 3 */}
                                                    <tr className="cart-item">
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="https://www.claudeusercontent.com/api/placeholder/80/80"
                                                                    className="product-image rounded"
                                                                    alt="Bluetooth Hoparlör"
                                                                />
                                                                <div className="ms-3">
                                                                    <h6 className="mb-1">Bluetooth Hoparlör</h6>
                                                                    <small className="text-muted">Renk: Mavi</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="fw-bold">₺799</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="input-group quantity-selector mx-auto">
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue={1}
                                                                />
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="fw-bold">₺799</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="bi bi-trash remove-item" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control coupon-input"
                                                        placeholder="İndirim kodu"
                                                    />
                                                    <button
                                                        className="btn btn-outline-secondary coupon-btn"
                                                        type="button"
                                                    >
                                                        Uygula
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-md-end">
                                                <button className="btn btn-outline-primary">
                                                    <i className="bi bi-arrow-repeat me-1" /> Sepeti Güncelle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Empty Cart (Hidden by Default) */}
                                <div className="card cart-empty d-none">
                                    <div className="card-body">
                                        <i className="bi bi-cart-x" />
                                        <h3>Sepetiniz Boş</h3>
                                        <p className="text-muted mb-4">
                                            Sepetinizde henüz ürün bulunmamaktadır.
                                        </p>
                                        <a href="#" className="btn btn-primary">
                                            Alışverişe Başla
                                        </a>
                                    </div>
                                </div>
                                {/* Benzer Ürünler Önerisi */}
                                <div className="card mt-4">
                                    <div className="card-header bg-white">
                                        <h5 className="mb-0">Bunlar da İlginizi Çekebilir</h5>
                                    </div>
                                    <div className="card-body similiar-products">
                                        {/* Ürün 1 */}
                                        <div className="similiar-product-card">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/180/180"
                                                className="card-img-top"
                                                alt="Ürün 1"
                                            />
                                            <div className="card-body px-0">
                                                <h6 className="card-title">Taşınabilir Şarj Cihazı</h6>
                                                <p className="card-text fw-bold">₺299</p>
                                                <button className="btn btn-sm btn-primary">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                        {/* Ürün 2 */}
                                        <div className="similiar-product-card">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/180/180"
                                                className="card-img-top"
                                                alt="Ürün 2"
                                            />
                                            <div className="card-body px-0">
                                                <h6 className="card-title">Telefon Kılıfı</h6>
                                                <p className="card-text fw-bold">₺149</p>
                                                <button className="btn btn-sm btn-primary">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                        {/* Ürün 3 */}
                                        <div className="similiar-product-card">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/180/180"
                                                className="card-img-top"
                                                alt="Ürün 3"
                                            />
                                            <div className="card-body px-0">
                                                <h6 className="card-title">Kablosuz Fare</h6>
                                                <p className="card-text fw-bold">₺199</p>
                                                <button className="btn btn-sm btn-primary">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                        {/* Ürün 4 */}
                                        <div className="similiar-product-card">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/180/180"
                                                className="card-img-top"
                                                alt="Ürün 4"
                                            />
                                            <div className="card-body px-0">
                                                <h6 className="card-title">USB Bellek 128GB</h6>
                                                <p className="card-text fw-bold">₺249</p>
                                                <button className="btn btn-sm btn-primary">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                        {/* Ürün 5 */}
                                        <div className="similiar-product-card">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/180/180"
                                                className="card-img-top"
                                                alt="Ürün 5"
                                            />
                                            <div className="card-body px-0">
                                                <h6 className="card-title">Bluetooth Kulaklık</h6>
                                                <p className="card-text fw-bold">₺349</p>
                                                <button className="btn btn-sm btn-primary">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                {/* Order Summary */}
                                <div className="card summary-card">
                                    <div className="card-header bg-white">
                                        <h5 className="mb-0">Sipariş Özeti</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Ara Toplam:</span>
                                            <span className="fw-bold">₺3.697</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Kargo:</span>
                                            <span className="fw-bold">₺29,99</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 text-success">
                                            <span>İndirim:</span>
                                            <span className="fw-bold">-₺250</span>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between mb-4">
                                            <span className="fw-bold">Toplam:</span>
                                            <span className="fw-bold fs-5">₺3.476,99</span>
                                        </div>
                                        <a href="/payment" className="btn btn-primary w-100 mb-3">
                                            <i className="bi bi-credit-card me-2" /> Ödemeye Geç
                                        </a>
                                        <a href="#" className="btn btn-outline-secondary w-100">
                                            <i className="bi bi-arrow-left me-2" /> Alışverişe Devam Et
                                        </a>
                                    </div>
                                </div>
                                {/* Payment Methods */}
                                <div className="card mt-4">
                                    <div className="card-header bg-white">
                                        <h5 className="mb-0">Ödeme Yöntemleri</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-2">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/280/40"
                                                alt="Ödeme Yöntemleri"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <p className="mb-0 small text-muted">
                                            Kredi kartı, banka kartı ve havale ile güvenli alışveriş
                                        </p>
                                    </div>
                                </div>
                                {/* Secure Shopping */}
                                <div className="card mt-4">
                                    <div className="card-body d-flex align-items-center">
                                        <i className="bi bi-shield-check text-success fs-1 me-3" />
                                        <div>
                                            <h6 className="mb-1">Güvenli Alışveriş</h6>
                                            <p className="mb-0 small text-muted">
                                                256-bit SSL sertifikası ile güvenli ödeme
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Need Help */}
                                <div className="card mt-4">
                                    <div className="card-body d-flex align-items-center">
                                        <i className="bi bi-headset text-primary fs-1 me-3" />
                                        <div>
                                            <h6 className="mb-1">Yardıma mı İhtiyacınız Var?</h6>
                                            <p className="mb-2 small text-muted">
                                                Sipariş ve ödeme konusunda destek alın
                                            </p>
                                            <a href="#" className="btn btn-sm btn-outline-primary">
                                                Bize Ulaşın
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </>
    )
}

export default Cart;