import '../styles/payment.css';

function Payment() {
    return (
        <>
            <div className="checkout-container">
                <div className="container py-5">
                    <h1 className="mb-4">Sipariş Oluştur</h1>
                    {/* Progress Bar */}
                    <div className="checkout-progress mb-5">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="progress" style={{ height: 4 }}>
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "33%" }}
                                        aria-valuenow={33}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <div className="position-relative mt-n2">
                                    <div className="d-flex justify-content-between">
                                        <div className="text-center position-relative">
                                            <span className="progress-step active">1</span>
                                            <div className="small mt-2">Teslimat</div>
                                        </div>
                                        <div className="text-center position-relative">
                                            <span className="progress-step">2</span>
                                            <div className="small mt-2">Ödeme</div>
                                        </div>
                                        <div className="text-center position-relative">
                                            <span className="progress-step">3</span>
                                            <div className="small mt-2">Onay</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Checkout Form */}
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0">Teslimat Adresi</h5>
                                </div>
                                <div className="card-body p-4">
                                    <form>
                                        {/* Save address checkbox */}
                                        <div className="mb-4">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="saveAddressCheckbox"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="saveAddressCheckbox"
                                                >
                                                    Bu adresi kaydet ve gelecekteki siparişlerimde kullan
                                                </label>
                                            </div>
                                        </div>
                                        {/* Address Selection */}
                                        <div className="mb-4">
                                            <label className="form-label">Kayıtlı Adreslerim</label>
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <div className="card border h-100">
                                                        <div className="card-body p-3">
                                                            <div className="form-check mb-2">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="address"
                                                                    id="address1"
                                                                    defaultChecked=""
                                                                />
                                                                <label
                                                                    className="form-check-label fw-bold"
                                                                    htmlFor="address1"
                                                                >
                                                                    Ev Adresim
                                                                </label>
                                                            </div>
                                                            <p className="small text-muted mb-0">
                                                                Ahmet Yılmaz
                                                                <br />
                                                                Bahçelievler Mah. Çiçek Sok. No:12 D:5
                                                                <br />
                                                                Bahçelievler, İstanbul, 34188
                                                                <br />
                                                                Türkiye
                                                                <br />
                                                                Tel: 0532 123 45 67
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card border h-100">
                                                        <div className="card-body p-3">
                                                            <div className="form-check mb-2">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="address"
                                                                    id="address2"
                                                                />
                                                                <label
                                                                    className="form-check-label fw-bold"
                                                                    htmlFor="address2"
                                                                >
                                                                    İş Adresim
                                                                </label>
                                                            </div>
                                                            <p className="small text-muted mb-0">
                                                                Ahmet Yılmaz
                                                                <br />
                                                                Mecidiyeköy Mah. İş Sok. No:42 Kat:3
                                                                <br />
                                                                Şişli, İstanbul, 34387
                                                                <br />
                                                                Türkiye
                                                                <br />
                                                                Tel: 0533 765 43 21
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-link ps-0 mt-2"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#newAddressForm"
                                            >
                                                <i className="bi bi-plus-circle" /> Yeni Adres Ekle
                                            </button>
                                        </div>
                                        {/* New Address Form (Collapsed by default) */}
                                        <div className="collapse" id="newAddressForm">
                                            <div className="card border mb-4">
                                                <div className="card-body p-3">
                                                    <h6 className="mb-3">Yeni Adres Bilgileri</h6>
                                                    <div className="row g-3">
                                                        <div className="col-md-6">
                                                            <label htmlFor="addressTitle" className="form-label">
                                                                Adres Başlığı
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="addressTitle"
                                                                placeholder="Örn: Ev, İş, Yazlık..."
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="fullName" className="form-label">
                                                                Ad Soyad
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="fullName"
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="phone" className="form-label">
                                                                Telefon
                                                            </label>
                                                            <input type="tel" className="form-control" id="phone" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="city" className="form-label">
                                                                İl
                                                            </label>
                                                            <select className="form-select" id="city">
                                                                <option selected="">Seçiniz</option>
                                                                <option>İstanbul</option>
                                                                <option>Ankara</option>
                                                                <option>İzmir</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="district" className="form-label">
                                                                İlçe
                                                            </label>
                                                            <select className="form-select" id="district">
                                                                <option selected="">Seçiniz</option>
                                                                <option>Kadıköy</option>
                                                                <option>Beşiktaş</option>
                                                                <option>Şişli</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="zipCode" className="form-label">
                                                                Posta Kodu
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="zipCode"
                                                            />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="addressDetail" className="form-label">
                                                                Adres
                                                            </label>
                                                            <textarea
                                                                className="form-control"
                                                                id="addressDetail"
                                                                rows={3}
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-3">
                                                        <button type="button" className="btn btn-outline-primary">
                                                            Adresi Kaydet
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Delivery Options */}
                                        <div className="mb-4">
                                            <label className="form-label">Teslimat Seçenekleri</label>
                                            <div className="card border mb-3">
                                                <div className="card-body p-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="deliveryOption"
                                                            id="standardDelivery"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label d-flex justify-content-between align-items-center w-100"
                                                            htmlFor="standardDelivery"
                                                        >
                                                            <div>
                                                                <span className="fw-bold">Standart Teslimat</span>
                                                                <p className="small text-muted mb-0">
                                                                    2-4 iş günü içinde teslimat
                                                                </p>
                                                            </div>
                                                            <span className="fw-bold">₺29,99</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card border mb-3">
                                                <div className="card-body p-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="deliveryOption"
                                                            id="expressDelivery"
                                                        />
                                                        <label
                                                            className="form-check-label d-flex justify-content-between align-items-center w-100"
                                                            htmlFor="expressDelivery"
                                                        >
                                                            <div>
                                                                <span className="fw-bold">Hızlı Teslimat</span>
                                                                <p className="small text-muted mb-0">
                                                                    1 iş günü içinde teslimat
                                                                </p>
                                                            </div>
                                                            <span className="fw-bold">₺49,99</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Invoice Information */}
                                        <div className="mb-4">
                                            <label className="form-label">Fatura Bilgileri</label>
                                            <div className="card border mb-3">
                                                <div className="card-body p-3">
                                                    <div className="form-check mb-3">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="invoiceType"
                                                            id="individualInvoice"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="individualInvoice"
                                                        >
                                                            Bireysel
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="invoiceType"
                                                            id="corporateInvoice"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="corporateInvoice"
                                                        >
                                                            Kurumsal
                                                        </label>
                                                    </div>
                                                    <div className="form-check mt-3">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="sameAsDelivery"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="sameAsDelivery"
                                                        >
                                                            Fatura adresim teslimat adresim ile aynı
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Order Note */}
                                        <div className="mb-4">
                                            <label htmlFor="orderNote" className="form-label">
                                                Sipariş Notu (İsteğe Bağlı)
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="orderNote"
                                                rows={3}
                                                placeholder="Teslimat ile ilgili özel notunuzu buraya yazabilirsiniz"
                                                defaultValue={""}
                                            />
                                        </div>
                                        {/* Navigation Buttons */}
                                        <div className="d-flex justify-content-between mt-4">
                                            <a href="#" className="btn btn-outline-secondary">
                                                <i className="bi bi-arrow-left me-2" /> Sepete Dön
                                            </a>
                                            <button type="button" className="btn btn-primary">
                                                Ödeme Adımına Geç <i className="bi bi-arrow-right ms-2" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Order Summary */}
                        <div className="col-lg-4">
                            <div
                                className="card border-0 shadow-sm mb-4 sticky-lg-top"
                                style={{ top: 20 }}
                            >
                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0">Sipariş Özeti</h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="order-items mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <span className="badge bg-primary me-2">3</span>
                                            <h6 className="mb-0">Sepetteki Ürünler</h6>
                                        </div>
                                        {/* Individual items in the order */}
                                        <div className="d-flex mb-3 border-bottom pb-3">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/60/60"
                                                className="rounded me-3"
                                                alt="Ürün Görseli"
                                            />
                                            <div>
                                                <h6 className="mb-1 small fw-bold">Kablosuz Kulaklık</h6>
                                                <p className="small text-muted mb-1">Renk: Siyah</p>
                                                <div className="d-flex align-items-center">
                                                    <span className="small">1 x ₺999</span>
                                                    <span className="fw-bold ms-auto">₺999</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-3 border-bottom pb-3">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/60/60"
                                                className="rounded me-3"
                                                alt="Ürün Görseli"
                                            />
                                            <div>
                                                <h6 className="mb-1 small fw-bold">Akıllı Saat</h6>
                                                <p className="small text-muted mb-1">Renk: Gümüş</p>
                                                <div className="d-flex align-items-center">
                                                    <span className="small">1 x ₺1.899</span>
                                                    <span className="fw-bold ms-auto">₺1.899</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-3">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/60/60"
                                                className="rounded me-3"
                                                alt="Ürün Görseli"
                                            />
                                            <div>
                                                <h6 className="mb-1 small fw-bold">Bluetooth Hoparlör</h6>
                                                <p className="small text-muted mb-1">Renk: Mavi</p>
                                                <div className="d-flex align-items-center">
                                                    <span className="small">1 x ₺799</span>
                                                    <span className="fw-bold ms-auto">₺799</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Price Summary */}
                                    <div className="price-summary mb-4">
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
                                        <div className="d-flex justify-content-between">
                                            <span className="fw-bold">Toplam:</span>
                                            <span className="fw-bold fs-5">₺3.476,99</span>
                                        </div>
                                        <small className="d-block text-muted text-end">KDV Dahil</small>
                                    </div>
                                    {/* Coupon Code */}
                                    <div className="mb-4">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="İndirim kodu"
                                            />
                                            <button className="btn btn-outline-secondary" type="button">
                                                Uygula
                                            </button>
                                        </div>
                                    </div>
                                    {/* Safe Shopping Reminder */}
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-shield-check text-success fs-5 me-2" />
                                        <div>
                                            <h6 className="mb-0 small">Güvenli Alışveriş</h6>
                                            <p className="mb-0 small text-muted">
                                                256-bit SSL ile şifrelenmiş güvenli ödeme
                                            </p>
                                        </div>
                                    </div>
                                    {/* Free Return Reminder */}
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-arrow-return-left text-primary fs-5 me-2" />
                                        <div>
                                            <h6 className="mb-0 small">Kolay İade</h6>
                                            <p className="mb-0 small text-muted">
                                                14 gün içinde ücretsiz iade
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        {/* Payment Form */}
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0">Ödeme Yöntemi</h5>
                                </div>
                                <div className="card-body p-4">
                                    <form>
                                        {/* Payment Method Selection */}
                                        <div className="payment-methods mb-4">
                                            <div
                                                className="nav nav-tabs payment-tabs mb-4"
                                                id="paymentTab"
                                                role="tablist"
                                            >
                                                <button
                                                    className="nav-link active"
                                                    id="card-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#card-content"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="card-content"
                                                    aria-selected="true"
                                                >
                                                    <i className="bi bi-credit-card me-2" />
                                                    Kredi/Banka Kartı
                                                </button>
                                                <button
                                                    className="nav-link"
                                                    id="bank-transfer-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#bank-transfer-content"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="bank-transfer-content"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-bank me-2" />
                                                    Havale/EFT
                                                </button>
                                                <button
                                                    className="nav-link"
                                                    id="online-pay-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#online-pay-content"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="online-pay-content"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-phone me-2" />
                                                    Online Ödeme
                                                </button>
                                            </div>
                                            <div className="tab-content" id="paymentTabContent">
                                                {/* Credit Card Payment Form */}
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="card-content"
                                                    role="tabpanel"
                                                    aria-labelledby="card-tab"
                                                >
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <label htmlFor="cardNumber" className="form-label">
                                                                Kart Numarası
                                                            </label>
                                                            <div className="input-group">
                                                                <span className="input-group-text bg-light">
                                                                    <i className="bi bi-credit-card text-muted" />
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="cardNumber"
                                                                    placeholder="XXXX XXXX XXXX XXXX"
                                                                />
                                                                <span className="input-group-text bg-light">
                                                                    <img
                                                                        src="https://www.claudeusercontent.com/api/placeholder/60/25"
                                                                        alt="Kart Logoları"
                                                                    />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="cardName" className="form-label">
                                                                Kart Üzerindeki İsim
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="cardName"
                                                                placeholder="Kart üzerindeki isim"
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label htmlFor="expiryDate" className="form-label">
                                                                Son Kullanma Tarihi
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="expiryDate"
                                                                placeholder="AA/YY"
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label htmlFor="cvvCode" className="form-label">
                                                                CVV
                                                            </label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="cvvCode"
                                                                    placeholder="XXX"
                                                                />
                                                                <span
                                                                    className="input-group-text bg-light"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Kartınızın arkasındaki 3 haneli güvenlik kodu"
                                                                >
                                                                    <i className="bi bi-question-circle text-muted" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className="my-4" />
                                                    {/* Installment Options */}
                                                    <div className="mb-4">
                                                        <h6 className="mb-3">Taksit Seçenekleri</h6>
                                                        <div className="card border mb-3">
                                                            <div className="card-body p-3">
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="installmentOption"
                                                                        id="singlePayment"
                                                                        defaultChecked=""
                                                                    />
                                                                    <label
                                                                        className="form-check-label d-flex justify-content-between align-items-center w-100"
                                                                        htmlFor="singlePayment"
                                                                    >
                                                                        <div>
                                                                            <span className="fw-bold">Tek Çekim</span>
                                                                            <p className="small text-muted mb-0">
                                                                                İndirimli fiyat avantajı
                                                                            </p>
                                                                        </div>
                                                                        <span className="fw-bold">₺3.476,99</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card border mb-3">
                                                            <div className="card-body p-3">
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="installmentOption"
                                                                        id="threeInstallments"
                                                                    />
                                                                    <label
                                                                        className="form-check-label d-flex justify-content-between align-items-center w-100"
                                                                        htmlFor="threeInstallments"
                                                                    >
                                                                        <div>
                                                                            <span className="fw-bold">3 Taksit</span>
                                                                            <p className="small text-muted mb-0">
                                                                                3 x ₺1.159,00
                                                                            </p>
                                                                        </div>
                                                                        <span className="fw-bold">₺3.476,99</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card border mb-3">
                                                            <div className="card-body p-3">
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="installmentOption"
                                                                        id="sixInstallments"
                                                                    />
                                                                    <label
                                                                        className="form-check-label d-flex justify-content-between align-items-center w-100"
                                                                        htmlFor="sixInstallments"
                                                                    >
                                                                        <div>
                                                                            <span className="fw-bold">6 Taksit</span>
                                                                            <p className="small text-muted mb-0">
                                                                                6 x ₺579,50
                                                                            </p>
                                                                        </div>
                                                                        <span className="fw-bold">₺3.476,99</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-3">
                                                            <i className="bi bi-shield-lock text-success me-2" />
                                                            <small className="text-muted">
                                                                Kart bilgileriniz SSL şifreleme ile korunmaktadır.
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Bank Transfer Tab Content */}
                                                <div
                                                    className="tab-pane fade"
                                                    id="bank-transfer-content"
                                                    role="tabpanel"
                                                    aria-labelledby="bank-transfer-tab"
                                                >
                                                    <div className="bank-accounts mb-4">
                                                        <p className="mb-3">
                                                            Aşağıdaki banka hesaplarımızdan birine ödemeyi
                                                            gerçekleştirebilirsiniz. Ödeme açıklamasına sipariş
                                                            numaranızı yazmayı unutmayınız.
                                                        </p>
                                                        <div className="card border mb-3">
                                                            <div className="card-body p-3">
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="bankAccount"
                                                                        id="garantiBank"
                                                                        defaultChecked=""
                                                                    />
                                                                    <label
                                                                        className="form-check-label w-100"
                                                                        htmlFor="garantiBank"
                                                                    >
                                                                        <div className="d-flex align-items-center mb-2">
                                                                            <img
                                                                                src="https://www.claudeusercontent.com/api/placeholder/50/30"
                                                                                alt="Garanti Bankası"
                                                                                className="me-2"
                                                                            />
                                                                            <span className="fw-bold">
                                                                                Garanti Bankası
                                                                            </span>
                                                                        </div>
                                                                        <p className="small text-muted mb-0">
                                                                            Hesap Sahibi: ModernShop A.Ş.
                                                                            <br />
                                                                            IBAN: TR12 3456 7890 1234 5678 9012 34
                                                                        </p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card border mb-3">
                                                            <div className="card-body p-3">
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="bankAccount"
                                                                        id="isBank"
                                                                    />
                                                                    <label
                                                                        className="form-check-label w-100"
                                                                        htmlFor="isBank"
                                                                    >
                                                                        <div className="d-flex align-items-center mb-2">
                                                                            <img
                                                                                src="https://www.claudeusercontent.com/api/placeholder/50/30"
                                                                                alt="İş Bankası"
                                                                                className="me-2"
                                                                            />
                                                                            <span className="fw-bold">İş Bankası</span>
                                                                        </div>
                                                                        <p className="small text-muted mb-0">
                                                                            Hesap Sahibi: ModernShop A.Ş.
                                                                            <br />
                                                                            IBAN: TR98 7654 3210 9876 5432 1098 76
                                                                        </p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card border mb-3">
                                                            <div className="card-body p-3">
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="bankAccount"
                                                                        id="ziraatBank"
                                                                    />
                                                                    <label
                                                                        className="form-check-label w-100"
                                                                        htmlFor="ziraatBank"
                                                                    >
                                                                        <div className="d-flex align-items-center mb-2">
                                                                            <img
                                                                                src="https://www.claudeusercontent.com/api/placeholder/50/30"
                                                                                alt="Ziraat Bankası"
                                                                                className="me-2"
                                                                            />
                                                                            <span className="fw-bold">
                                                                                Ziraat Bankası
                                                                            </span>
                                                                        </div>
                                                                        <p className="small text-muted mb-0">
                                                                            Hesap Sahibi: ModernShop A.Ş.
                                                                            <br />
                                                                            IBAN: TR55 6677 8899 0011 2233 4455 66
                                                                        </p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="alert alert-info mt-3" role="alert">
                                                            <i className="bi bi-info-circle me-2" />
                                                            <small>
                                                                Havale/EFT ödemelerinde, ödemenizi
                                                                gerçekleştirdikten sonra siparişiniz onaylanacaktır.
                                                                Ödeme açıklamasına sipariş numaranızı eklemeyi
                                                                unutmayınız.
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Online Payment Tab Content */}
                                                <div
                                                    className="tab-pane fade"
                                                    id="online-pay-content"
                                                    role="tabpanel"
                                                    aria-labelledby="online-pay-tab"
                                                >
                                                    <div className="online-payment mb-4">
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">
                                                                <div className="card border h-100">
                                                                    <div className="card-body p-3">
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="onlinePayment"
                                                                                id="mobilePay"
                                                                                defaultChecked=""
                                                                            />
                                                                            <label
                                                                                className="form-check-label w-100"
                                                                                htmlFor="mobilePay"
                                                                            >
                                                                                <div className="d-flex align-items-center mb-2">
                                                                                    <img
                                                                                        src="https://www.claudeusercontent.com/api/placeholder/50/30"
                                                                                        alt="Mobil Ödeme"
                                                                                        className="me-2"
                                                                                    />
                                                                                    <span className="fw-bold">
                                                                                        Mobil Ödeme
                                                                                    </span>
                                                                                </div>
                                                                                <p className="small text-muted mb-0">
                                                                                    Cep telefonu faturanıza ödeme yansıtılır
                                                                                </p>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <div className="card border h-100">
                                                                    <div className="card-body p-3">
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="onlinePayment"
                                                                                id="walletPay"
                                                                            />
                                                                            <label
                                                                                className="form-check-label w-100"
                                                                                htmlFor="walletPay"
                                                                            >
                                                                                <div className="d-flex align-items-center mb-2">
                                                                                    <img
                                                                                        src="https://www.claudeusercontent.com/api/placeholder/50/30"
                                                                                        alt="Dijital Cüzdan"
                                                                                        className="me-2"
                                                                                    />
                                                                                    <span className="fw-bold">
                                                                                        Dijital Cüzdan
                                                                                    </span>
                                                                                </div>
                                                                                <p className="small text-muted mb-0">
                                                                                    Dijital cüzdanınızdan hızlı ödeme
                                                                                </p>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/*
                             */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Order Confirmation */}
                        <div className="col-lg-8">
                            {/* Success Message */}
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-body p-4 text-center">
                                    <div className="confirmation-icon mb-3">
                                        <i className="bi bi-check-circle-fill text-success" />
                                    </div>
                                    <h3 className="mb-2">Siparişiniz Başarıyla Oluşturuldu!</h3>
                                    <p className="text-muted mb-4">
                                        Siparişiniz için teşekkür ederiz. Siparişinizle ilgili tüm
                                        güncellemeler e-posta adresinize gönderilecektir.
                                    </p>
                                    <div className="order-details mb-4">
                                        <span className="d-block mb-1">
                                            Sipariş Numarası: <strong>MS-2025042112574</strong>
                                        </span>
                                        <span className="d-block">
                                            Sipariş Tarihi: <strong>21 Nisan 2025, 12:57</strong>
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <a href="#" className="btn btn-primary me-2">
                                            <i className="bi bi-box-arrow-in-down me-2" />
                                            Siparişi İndir
                                        </a>
                                        <a href="#" className="btn btn-outline-secondary">
                                            <i className="bi bi-envelope me-2" />
                                            E-posta Gönder
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Order Items */}
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0">Sipariş Edilen Ürünler</h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="table-responsive">
                                        <table className="table align-middle">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Ürün</th>
                                                    <th className="text-center">Miktar</th>
                                                    <th className="text-end">Fiyat</th>
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
                                                                <p className="text-muted small mb-0">Renk: Siyah</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">1</td>
                                                    <td className="text-end fw-bold">₺999</td>
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
                                                                <p className="text-muted small mb-0">Renk: Gümüş</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">1</td>
                                                    <td className="text-end fw-bold">₺1.899</td>
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
                                                                <p className="text-muted small mb-0">Renk: Mavi</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">1</td>
                                                    <td className="text-end fw-bold">₺799</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan={2} className="text-end">
                                                        Ara Toplam:
                                                    </td>
                                                    <td className="text-end fw-bold">₺3.697</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2} className="text-end">
                                                        Kargo:
                                                    </td>
                                                    <td className="text-end fw-bold">₺29,99</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2} className="text-end text-success">
                                                        İndirim:
                                                    </td>
                                                    <td className="text-end fw-bold text-success">-₺250</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2} className="text-end fw-bold">
                                                        Toplam:
                                                    </td>
                                                    <td className="text-end fw-bold fs-5">₺3.476,99</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* Delivery and Payment Information */}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm mb-4">
                                        <div className="card-header bg-white py-3">
                                            <h5 className="mb-0">Teslimat Bilgileri</h5>
                                        </div>
                                        <div className="card-body p-4">
                                            <h6 className="mb-2">Ev Adresim</h6>
                                            <p className="text-muted mb-1">
                                                Ahmet Yılmaz
                                                <br />
                                                Bahçelievler Mah. Çiçek Sok. No:12 D:5
                                                <br />
                                                Bahçelievler, İstanbul, 34188
                                                <br />
                                                Türkiye
                                            </p>
                                            <p className="text-muted mb-0">Tel: 0532 123 45 67</p>
                                            <hr className="my-3" />
                                            <h6 className="mb-2">Teslimat Yöntemi</h6>
                                            <p className="mb-0 d-flex justify-content-between">
                                                <span>Standart Teslimat</span>
                                                <span className="fw-bold">₺29,99</span>
                                            </p>
                                            <small className="text-muted">
                                                Tahmini Teslimat: 23-25 Nisan 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm mb-4">
                                        <div className="card-header bg-white py-3">
                                            <h5 className="mb-0">Ödeme Bilgileri</h5>
                                        </div>
                                        <div className="card-body p-4">
                                            <h6 className="mb-2">Ödeme Yöntemi</h6>
                                            <div className="d-flex align-items-center mb-3">
                                                <img
                                                    src="https://www.claudeusercontent.com/api/placeholder/50/30"
                                                    alt="Kredi Kartı"
                                                    className="me-2"
                                                />
                                                <div>
                                                    <p className="mb-0 fw-medium">Kredi Kartı</p>
                                                    <p className="text-muted small mb-0">
                                                        **** **** **** 1234
                                                    </p>
                                                </div>
                                            </div>
                                            <h6 className="mb-2">Ödeme Planı</h6>
                                            <p className="mb-3">
                                                Tek Çekim: <strong>₺3.476,99</strong>
                                            </p>
                                            <h6 className="mb-2">Fatura Adresi</h6>
                                            <p className="text-muted mb-0">
                                                Ahmet Yılmaz
                                                <br />
                                                Bahçelievler Mah. Çiçek Sok. No:12 D:5
                                                <br />
                                                Bahçelievler, İstanbul, 34188
                                                <br />
                                                Türkiye
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Next Steps and Tracking */}
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0">Sipariş Takibi</h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                                        <div className="mb-3 mb-md-0">
                                            <p className="mb-1">
                                                Siparişinizin durumunu takip etmek için:
                                            </p>
                                            <p className="mb-0">
                                                1. E-postanıza gönderilen takip bağlantısını
                                                kullanabilirsiniz
                                            </p>
                                            <p className="mb-0">
                                                2. "Siparişlerim" sayfasından takip edebilirsiniz
                                            </p>
                                            <p className="mb-0">
                                                3. Müşteri hizmetlerinden bilgi alabilirsiniz
                                            </p>
                                        </div>
                                        <a href="#" className="btn btn-outline-primary">
                                            <i className="bi bi-truck me-2" />
                                            Siparişi Takip Et
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Navigation Buttons */}
                            <div className="d-flex justify-content-between mt-4">
                                <a href="#" className="btn btn-outline-secondary">
                                    <i className="bi bi-arrow-left me-2" /> Alışverişe Devam Et
                                </a>
                                <a href="#" className="btn btn-primary">
                                    Siparişlerim <i className="bi bi-box me-2" />
                                </a>
                            </div>
                        </div>
                        {/* Side Information */}
                        <div className="col-lg-4">
                            {/* Help and Support */}
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0">Yardım ve Destek</h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="mb-4">
                                        <h6 className="mb-2">
                                            <i className="bi bi-question-circle me-2" />
                                            Sık Sorulan Sorular
                                        </h6>
                                        <ul className="list-unstyled ps-4 mb-0">
                                            <li className="mb-2">
                                                <a href="#" className="text-decoration-none">
                                                    Sipariş durumumu nasıl takip edebilirim?
                                                </a>
                                            </li>
                                            <li className="mb-2">
                                                <a href="#" className="text-decoration-none">
                                                    Ödeme yöntemimi değiştirebilir miyim?
                                                </a>
                                            </li>
                                            <li className="mb-2">
                                                <a href="#" className="text-decoration-none">
                                                    Teslimat adresimi güncelleyebilir miyim?
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-decoration-none">
                                                    İade ve değişim politikanız nedir?
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mb-4">
                                        <h6 className="mb-2">
                                            <i className="bi bi-headset me-2" />
                                            Müşteri Hizmetleri
                                        </h6>
                                        <p className="mb-2">
                                            Siparişinizle ilgili sorularınız için bize ulaşın:
                                        </p>
                                        <p className="mb-1">
                                            <i className="bi bi-telephone me-2" />
                                            0850 123 45 67
                                        </p>
                                        <p className="mb-0">
                                            <i className="bi bi-envelope me-2" />
                                            destek@modernshop.com
                                        </p>
                                    </div>
                                    <div className="text-center mt-4">
                                        <a href="#" className="btn btn-outline-secondary w-100">
                                            <i className="bi bi-chat-dots me-2" />
                                            Canlı Destek
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Recommended Products */}
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0">Sizin İçin Öneriler</h5>
                                </div>
                                <div className="card-body p-3">
                                    <div className="recommended-product mb-3 pb-3 border-bottom">
                                        <div className="d-flex">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/60/60"
                                                className="rounded me-3"
                                                alt="Ürün Görseli"
                                            />
                                            <div>
                                                <h6 className="mb-1 small">Taşınabilir Şarj Cihazı</h6>
                                                <div className="d-flex align-items-center mb-1">
                                                    <div className="text-warning me-1">
                                                        <i className="bi bi-star-fill small" />
                                                        <i className="bi bi-star-fill small" />
                                                        <i className="bi bi-star-fill small" />
                                                        <i className="bi bi-star-fill small" />
                                                        <i className="bi bi-star-half small" />
                                                    </div>
                                                    <small className="text-muted">(98)</small>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="fw-bold">₺299</span>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recommended-product mb-3 pb-3 border-bottom">
                                        <div className="d-flex">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/60/60"
                                                className="rounded me-3"
                                                alt="Ürün Görseli"
                                            />
                                            <div>
                                                <h6 className="mb-1 small">Kulaklık Taşıma Çantası</h6>
                                                <div className="d-flex align-items-center mb-1">
                                                    <div className="text-warning me-1">
                                                        <i className="bi bi-star-fill small" />
                                                        <i className="bi bi-star-fill small" />
                                                        <i className="bi bi-star-fill small" />
                                                        <i className="bi bi-star-fill small" />
                                                        <i className="bi bi-star small" />
                                                    </div>
                                                    <small className="text-muted">(56)</small>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="fw-bold">₺129</span>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recommended-product">
                                        <div className="d-flex">
                                            <img
                                                src="https://www.claudeusercontent.com/api/placeholder/60/60"
                                                className="rounded me-3"
                                                alt="Ürün Görseli"
                                            />
                                            <div>
                                                <h6 className="mb-1 small">Akıllı Saat Kordon</h6>
                                                <div className="d-flex align-items-center mb-1">
                                                    <div className="text-warning me-1">
                                                        <i className="bi bi-star-fill small" />
                                                        <i className="bi bi-star-fill small" />
                                                        <i className="bi bi-star-fill small" />
                                                        <i className="bi bi-star-fill small" />
                                                        <i className="bi bi-star small" />
                                                    </div>
                                                    <small className="text-muted">(43)</small>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="fw-bold">₺199</span>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-3">
                                        <a href="#" className="btn btn-link text-decoration-none">
                                            Tümünü Gör <i className="bi bi-arrow-right" />
                                        </a>
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

export default Payment;