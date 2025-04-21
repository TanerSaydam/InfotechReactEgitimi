import '../styles/profile.css';

function Profile() {
    return (
        <>
            {/* Breadcrumb */}
            <section className="breadcrumb-section">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
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
                                Profilim
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* Profile Section */}
            <section className="profile-container">
                <div className="container">
                    <div className="row">
                        {/* Left Sidebar - Navigation */}
                        <div className="col-lg-3">
                            <div className="account-nav">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <div className="avatar-container mb-3">
                                            <div className="avatar-circle">
                                                <img
                                                    src="https://www.claudeusercontent.com/api/placeholder/100/100"
                                                    alt="Profil Fotoğrafı"
                                                    className="avatar-image"
                                                />
                                            </div>
                                            <div className="avatar-edit" title="Fotoğrafı Değiştir">
                                                <i className="bi bi-pencil" />
                                            </div>
                                        </div>
                                        <h5 className="mb-1">Ahmet Yılmaz</h5>
                                        <p className="text-muted mb-3 small">ahmet.yilmaz@email.com</p>
                                        <p className="badge bg-success mb-0">Premium Üye</p>
                                    </div>
                                </div>
                                <div className="list-group">
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action active d-flex align-items-center"
                                    >
                                        <i className="bi bi-person-circle me-3" />
                                        Profilim
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action d-flex align-items-center"
                                    >
                                        <i className="bi bi-box-seam me-3" />
                                        Siparişlerim
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action d-flex align-items-center"
                                    >
                                        <i className="bi bi-heart me-3" />
                                        Favori Ürünlerim
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action d-flex align-items-center"
                                    >
                                        <i className="bi bi-geo-alt me-3" />
                                        Adreslerim
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action d-flex align-items-center"
                                    >
                                        <i className="bi bi-credit-card me-3" />
                                        Ödeme Yöntemlerim
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action d-flex align-items-center"
                                    >
                                        <i className="bi bi-bell me-3" />
                                        Bildirimler
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action d-flex align-items-center"
                                    >
                                        <i className="bi bi-shield-lock me-3" />
                                        Güvenlik
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action text-danger d-flex align-items-center"
                                    >
                                        <i className="bi bi-box-arrow-right me-3" />
                                        Çıkış Yap
                                    </a>
                                </div>
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            <i className="bi bi-headset me-2" />
                                            Yardıma mı ihtiyacınız var?
                                        </h6>
                                        <p className="card-text small">
                                            Müşteri hizmetleri ekibimiz sorularınızı yanıtlamak için
                                            hazır.
                                        </p>
                                        <a href="#" className="btn btn-outline-primary btn-sm w-100">
                                            Destek Al
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Main Content */}
                        <div className="col-lg-9">
                            {/* Profile Tabs */}
                            <ul
                                className="nav nav-tabs profile-tabs mb-4"
                                id="profileTabs"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="personal-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#personal"
                                        type="button"
                                        role="tab"
                                        aria-controls="personal"
                                        aria-selected="true"
                                    >
                                        Kişisel Bilgiler
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="addresses-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#addresses"
                                        type="button"
                                        role="tab"
                                        aria-controls="addresses"
                                        aria-selected="false"
                                    >
                                        Adreslerim
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="payments-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#payments"
                                        type="button"
                                        role="tab"
                                        aria-controls="payments"
                                        aria-selected="false"
                                    >
                                        Ödeme Yöntemlerim
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="preferences-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#preferences"
                                        type="button"
                                        role="tab"
                                        aria-controls="preferences"
                                        aria-selected="false"
                                    >
                                        Tercihlerim
                                    </button>
                                </li>
                            </ul>
                            {/* Tab Content */}
                            <div className="tab-content" id="profileTabsContent">
                                {/* Personal Information Tab */}
                                <div
                                    className="tab-pane fade show active"
                                    id="personal"
                                    role="tabpanel"
                                    aria-labelledby="personal-tab"
                                >
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h5 className="mb-0">Kişisel Bilgiler</h5>
                                            <span className="badge bg-primary">Düzenlenebilir</span>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <div className="col-md-6 mb-3 mb-md-0">
                                                        <label htmlFor="firstName" className="form-label">
                                                            Ad
                                                        </label>
                                                        <div className="input-icon">
                                                            <i className="bi bi-person" />
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="firstName"
                                                                defaultValue="Ahmet"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="lastName" className="form-label">
                                                            Soyad
                                                        </label>
                                                        <div className="input-icon">
                                                            <i className="bi bi-person" />
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="lastName"
                                                                defaultValue="Yılmaz"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">
                                                        E-posta Adresi
                                                    </label>
                                                    <div className="input-icon">
                                                        <i className="bi bi-envelope" />
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            defaultValue="ahmet.yilmaz@email.com"
                                                            disabled=""
                                                        />
                                                    </div>
                                                    <div className="form-text">
                                                        E-posta adresinizi değiştirmek için lütfen müşteri
                                                        hizmetleriyle iletişime geçin.
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-6 mb-3 mb-md-0">
                                                        <label htmlFor="phone" className="form-label">
                                                            Telefon Numarası
                                                        </label>
                                                        <div className="input-icon">
                                                            <i className="bi bi-telephone" />
                                                            <input
                                                                type="tel"
                                                                className="form-control"
                                                                id="phone"
                                                                defaultValue="0532 123 45 67"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="birthdate" className="form-label">
                                                            Doğum Tarihi
                                                        </label>
                                                        <div className="input-icon">
                                                            <i className="bi bi-calendar" />
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                id="birthdate"
                                                                defaultValue="1985-03-15"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label d-block">Cinsiyet</label>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="male"
                                                            defaultValue="male"
                                                            defaultChecked=""
                                                        />
                                                        <label className="form-check-label" htmlFor="male">
                                                            Erkek
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="female"
                                                            defaultValue="female"
                                                        />
                                                        <label className="form-check-label" htmlFor="female">
                                                            Kadın
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="other"
                                                            defaultValue="other"
                                                        />
                                                        <label className="form-check-label" htmlFor="other">
                                                            Belirtmek İstemiyorum
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-secondary me-2"
                                                    >
                                                        İptal
                                                    </button>
                                                    <button type="submit" className="btn btn-primary">
                                                        Değişiklikleri Kaydet
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* Password Change Card */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">Şifre Değiştir</h5>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="currentPassword" className="form-label">
                                                        Mevcut Şifre
                                                    </label>
                                                    <div className="input-icon">
                                                        <i className="bi bi-lock" />
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="currentPassword"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="newPassword" className="form-label">
                                                        Yeni Şifre
                                                    </label>
                                                    <div className="input-icon">
                                                        <i className="bi bi-lock" />
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="newPassword"
                                                        />
                                                    </div>
                                                    <div className="form-text">
                                                        Şifreniz en az 8 karakter, bir büyük harf, bir küçük
                                                        harf ve bir rakam içermelidir.
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="confirmPassword" className="form-label">
                                                        Yeni Şifre Tekrar
                                                    </label>
                                                    <div className="input-icon">
                                                        <i className="bi bi-lock" />
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="confirmPassword"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <button type="submit" className="btn btn-primary">
                                                        Şifreyi Güncelle
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* Delete Account Card */}
                                    <div className="card border-danger">
                                        <div className="card-header bg-danger text-white">
                                            <h5 className="mb-0">Hesabı Sil</h5>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                Hesabınızı silmek tüm verilerinizi, siparişlerinizi ve
                                                tercihlerinizi kalıcı olarak silecektir. Bu işlem geri
                                                alınamaz.
                                            </p>
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                data-bs-toggle="modal"
                                                data-bs-target="#deleteAccountModal"
                                            >
                                                Hesabımı Silmek İstiyorum
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Addresses Tab */}
                                <div
                                    className="tab-pane fade"
                                    id="addresses"
                                    role="tabpanel"
                                    aria-labelledby="addresses-tab"
                                >
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h5 className="mb-0">Kayıtlı Adreslerim</h5>
                                        <button
                                            className="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#addAddressModal"
                                        >
                                            <i className="bi bi-plus-circle me-2" />
                                            Yeni Adres Ekle
                                        </button>
                                    </div>
                                    <div className="row g-3">
                                        {/* Address 1 */}
                                        <div className="col-md-6">
                                            <div className="address-card default">
                                                <div className="d-flex justify-content-between align-items-start mb-2">
                                                    <h6 className="mb-0">Ev Adresim</h6>
                                                    <span className="badge bg-primary">Varsayılan</span>
                                                </div>
                                                <p className="text-muted mb-3">
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
                                                <div className="address-actions d-flex justify-content-end">
                                                    <button className="btn btn-outline-secondary btn-sm me-2">
                                                        <i className="bi bi-pencil me-1" />
                                                        Düzenle
                                                    </button>
                                                    <button className="btn btn-outline-danger btn-sm">
                                                        <i className="bi bi-trash me-1" />
                                                        Sil
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Address 2 */}
                                        <div className="col-md-6">
                                            <div className="address-card">
                                                <div className="d-flex justify-content-between align-items-start mb-2">
                                                    <h6 className="mb-0">İş Adresim</h6>
                                                </div>
                                                <p className="text-muted mb-3">
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
                                                <div className="address-actions d-flex justify-content-end">
                                                    <button className="btn btn-outline-primary btn-sm me-2">
                                                        <i className="bi bi-check-circle me-1" />
                                                        Varsayılan Yap
                                                    </button>
                                                    <button className="btn btn-outline-secondary btn-sm me-2">
                                                        <i className="bi bi-pencil me-1" />
                                                        Düzenle
                                                    </button>
                                                    <button className="btn btn-outline-danger btn-sm">
                                                        <i className="bi bi-trash me-1" />
                                                        Sil
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Address 3 */}
                                        <div className="col-md-6">
                                            <div className="address-card">
                                                <div className="d-flex justify-content-between align-items-start mb-2">
                                                    <h6 className="mb-0">Yazlık Ev</h6>
                                                </div>
                                                <p className="text-muted mb-3">
                                                    Ahmet Yılmaz
                                                    <br />
                                                    Güzelçamlı Mah. Deniz Cad. No:23
                                                    <br />
                                                    Kuşadası, Aydın, 09270
                                                    <br />
                                                    Türkiye
                                                    <br />
                                                    Tel: 0532 123 45 67
                                                </p>
                                                <div className="address-actions d-flex justify-content-end">
                                                    <button className="btn btn-outline-primary btn-sm me-2">
                                                        <i className="bi bi-check-circle me-1" />
                                                        Varsayılan Yap
                                                    </button>
                                                    <button className="btn btn-outline-secondary btn-sm me-2">
                                                        <i className="bi bi-pencil me-1" />
                                                        Düzenle
                                                    </button>
                                                    <button className="btn btn-outline-danger btn-sm">
                                                        <i className="bi bi-trash me-1" />
                                                        Sil
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Payment Methods Tab */}
                                <div
                                    className="tab-pane fade"
                                    id="payments"
                                    role="tabpanel"
                                    aria-labelledby="payments-tab"
                                >
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h5 className="mb-0">Kayıtlı Ödeme Yöntemlerim</h5>
                                        <button
                                            className="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#addPaymentModal"
                                        >
                                            <i className="bi bi-plus-circle me-2" />
                                            Yeni Kart Ekle
                                        </button>
                                    </div>
                                    <div className="row g-3">
                                        {/* Payment Method 1 */}
                                        <div className="col-md-6">
                                            <div className="payment-card default">
                                                <div className="d-flex justify-content-between align-items-start mb-2">
                                                    <h6 className="mb-0">Ziraat Bankası</h6>
                                                    <span className="badge bg-primary">Varsayılan</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-3">
                                                        <img src="https://www.claudeusercontent.com/api/placeholder/60/40" alt="Banka Logosu" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">**** **** **** 1234</p>
                                                        <small className="text-muted">
                                                            Son Kullanma: 08/2026
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="payment-actions d-flex justify-content-end">
                                                    <button className="btn btn-outline-secondary btn-sm me-2">
                                                        <i className="bi bi-pencil me-1" />
                                                        Düzenle
                                                    </button>
                                                    <button className="btn btn-outline-danger btn-sm">
                                                        <i className="bi bi-trash me-1" />
                                                        Sil
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Payment Method 2 */}
                                        <div className="col-md-6">
                                            <div className="payment-card">
                                                <div className="d-flex justify-content-between align-items-start mb-2">
                                                    <h6 className="mb-0">İş Bankası</h6>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-3">
                                                        <img src="https://www.claudeusercontent.com/api/placeholder/60/40" alt="Banka Logosu" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">**** **** **** 5678</p>
                                                        <small className="text-muted">
                                                            Son Kullanma: 11/2025
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="payment-actions d-flex justify-content-end">
                                                    <button className="btn btn-outline-primary btn-sm me-2">
                                                        <i className="bi bi-check-circle me-1" />
                                                        Varsayılan Yap
                                                    </button>
                                                    <button className="btn btn-outline-secondary btn-sm me-2">
                                                        <i className="bi bi-pencil me-1" />
                                                        Düzenle
                                                    </button>
                                                    <button className="btn btn-outline-danger btn-sm">
                                                        <i className="bi bi-trash me-1" />
                                                        Sil
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Preferences Tab */}
                                <div
                                    className="tab-pane fade"
                                    id="preferences"
                                    role="tabpanel"
                                    aria-labelledby="preferences-tab"
                                >
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">İletişim Tercihleri</h5>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="mb-4">
                                                    <h6 className="mb-3">E-posta Bildirimleri</h6>
                                                    <div className="form-check mb-2">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="newsletterCheck"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="newsletterCheck"
                                                        >
                                                            Aylık E-bülten
                                                        </label>
                                                        <div className="form-text">
                                                            Yeni ürünler, indirimler ve öneriler hakkında aylık
                                                            e-bülten.
                                                        </div>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="promotionCheck"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="promotionCheck"
                                                        >
                                                            Promosyon ve İndirimler
                                                        </label>
                                                        <div className="form-text">
                                                            Özel teklifler, indirim kuponları ve sınırlı süreli
                                                            kampanyalar.
                                                        </div>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="orderCheck"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="orderCheck"
                                                        >
                                                            Sipariş Güncellemeleri
                                                        </label>
                                                        <div className="form-text">
                                                            Sipariş onayları, kargo takibi ve teslimat
                                                            bildirimleri.
                                                        </div>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="reviewCheck"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="reviewCheck"
                                                        >
                                                            Ürün Değerlendirme Hatırlatıcıları
                                                        </label>
                                                        <div className="form-text">
                                                            Satın aldığınız ürünler için değerlendirme
                                                            hatırlatmaları.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="mb-3">SMS Bildirimleri</h6>
                                                    <div className="form-check mb-2">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="smsOrderCheck"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="smsOrderCheck"
                                                        >
                                                            Sipariş Güncellemeleri
                                                        </label>
                                                        <div className="form-text">
                                                            Sipariş durumu ve kargo takibi için SMS bildirimleri.
                                                        </div>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="smsPromotionCheck"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="smsPromotionCheck"
                                                        >
                                                            Kampanya ve İndirimler
                                                        </label>
                                                        <div className="form-text">
                                                            Özel teklifler ve kampanyalar için SMS bildirimleri.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="mb-3">Mobil Uygulama Bildirimleri</h6>
                                                    <div className="form-check mb-2">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="appOrderCheck"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="appOrderCheck"
                                                        >
                                                            Sipariş Bildirimleri
                                                        </label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="appPromotionCheck"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="appPromotionCheck"
                                                        >
                                                            İndirim ve Kampanyalar
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="appStockCheck"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="appStockCheck"
                                                        >
                                                            Stok Bildirimleri
                                                        </label>
                                                        <div className="form-text">
                                                            Favori ürünleriniz stoka girdiğinde bildirim alın.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <button type="submit" className="btn btn-primary">
                                                        Tercihleri Kaydet
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">Görünüm ve Dil Tercihleri</h5>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="language" className="form-label">
                                                        Tercih Edilen Dil
                                                    </label>
                                                    <select className="form-select" id="language">
                                                        <option value="tr" selected="">
                                                            Türkçe
                                                        </option>
                                                        <option value="en">English</option>
                                                        <option value="de">Deutsch</option>
                                                        <option value="fr">Français</option>
                                                        <option value="es">Español</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="currency" className="form-label">
                                                        Para Birimi
                                                    </label>
                                                    <select className="form-select" id="currency">
                                                        <option value="TRY" selected="">
                                                            Türk Lirası (₺)
                                                        </option>
                                                        <option value="USD">US Dollar ($)</option>
                                                        <option value="EUR">Euro (€)</option>
                                                        <option value="GBP">British Pound (£)</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Görünüm Modu</label>
                                                    <div className="form-check mb-2">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="themeMode"
                                                            id="lightMode"
                                                            defaultChecked=""
                                                        />
                                                        <label className="form-check-label" htmlFor="lightMode">
                                                            <i className="bi bi-sun me-2" />
                                                            Açık Mod
                                                        </label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="themeMode"
                                                            id="darkMode"
                                                        />
                                                        <label className="form-check-label" htmlFor="darkMode">
                                                            <i className="bi bi-moon me-2" />
                                                            Koyu Mod
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="themeMode"
                                                            id="systemMode"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="systemMode"
                                                        >
                                                            <i className="bi bi-laptop me-2" />
                                                            Sistem Ayarlarına Göre
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <button type="submit" className="btn btn-primary">
                                                        Tercihleri Kaydet
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Modals */}
            {/* Delete Account Modal */}
            <div
                className="modal fade"
                id="deleteAccountModal"
                tabIndex={-1}
                aria-labelledby="deleteAccountModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-danger text-white">
                            <h5 className="modal-title" id="deleteAccountModalLabel">
                                Hesap Silme Onayı
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <p className="mb-3">
                                Hesabınızı silmek istediğinizden emin misiniz? Bu işlem geri
                                alınamaz ve tüm verileriniz kalıcı olarak silinecektir:
                            </p>
                            <ul>
                                <li>Profil bilgileriniz</li>
                                <li>Sipariş geçmişiniz</li>
                                <li>Kayıtlı adresleriniz</li>
                                <li>Ödeme yöntemleriniz</li>
                                <li>Favori ürünleriniz</li>
                            </ul>
                            <div className="form-check mb-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="confirmDelete"
                                />
                                <label className="form-check-label" htmlFor="confirmDelete">
                                    Hesabımı silmek istediğimi ve bu işlemin geri alınamayacağını
                                    onaylıyorum
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="deleteReason" className="form-label">
                                    Hesabınızı silme nedeniniz nedir? (İsteğe bağlı)
                                </label>
                                <select className="form-select" id="deleteReason">
                                    <option value="" selected="">
                                        Seçiniz
                                    </option>
                                    <option value="newAccount">Yeni bir hesap açacağım</option>
                                    <option value="privacy">Gizlilik endişelerim var</option>
                                    <option value="noUse">Artık kullanmıyorum</option>
                                    <option value="badExperience">Kötü deneyim yaşadım</option>
                                    <option value="other">Diğer</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="deletePassword" className="form-label">
                                    Lütfen şifrenizi girin
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="deletePassword"
                                    placeholder="Şifreniz"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Vazgeç
                            </button>
                            <button type="button" className="btn btn-danger" disabled="">
                                Hesabımı Sil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Address Modal */}
            <div
                className="modal fade"
                id="addAddressModal"
                tabIndex={-1}
                aria-labelledby="addAddressModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addAddressModalLabel">
                                Yeni Adres Ekle
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
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
                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label htmlFor="addressName" className="form-label">
                                            Ad Soyad
                                        </label>
                                        <input type="text" className="form-control" id="addressName" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="addressPhone" className="form-label">
                                            Telefon
                                        </label>
                                        <input type="tel" className="form-control" id="addressPhone" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label htmlFor="addressCity" className="form-label">
                                            İl
                                        </label>
                                        <select className="form-select" id="addressCity">
                                            <option selected="">Seçiniz</option>
                                            <option>İstanbul</option>
                                            <option>Ankara</option>
                                            <option>İzmir</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="addressDistrict" className="form-label">
                                            İlçe
                                        </label>
                                        <select className="form-select" id="addressDistrict">
                                            <option selected="">Seçiniz</option>
                                            <option>Kadıköy</option>
                                            <option>Beşiktaş</option>
                                            <option>Şişli</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="addressZip" className="form-label">
                                        Posta Kodu
                                    </label>
                                    <input type="text" className="form-control" id="addressZip" />
                                </div>
                                <div className="mb-3">
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
                                <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="defaultAddress"
                                    />
                                    <label className="form-check-label" htmlFor="defaultAddress">
                                        Bu adresi varsayılan olarak ayarla
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                İptal
                            </button>
                            <button type="button" className="btn btn-primary">
                                Kaydet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Payment Method Modal */}
            <div
                className="modal fade"
                id="addPaymentModal"
                tabIndex={-1}
                aria-labelledby="addPaymentModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addPaymentModalLabel">
                                Yeni Ödeme Yöntemi Ekle
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="cardNumber" className="form-label">
                                        Kart Numarası
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cardNumber"
                                        placeholder="**** **** **** ****"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cardName" className="form-label">
                                        Kart Üzerindeki İsim
                                    </label>
                                    <input type="text" className="form-control" id="cardName" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col-6">
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
                                    <div className="col-6">
                                        <label htmlFor="cvv" className="form-label">
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cvv"
                                            placeholder="***"
                                        />
                                    </div>
                                </div>
                                <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="defaultPayment"
                                    />
                                    <label className="form-check-label" htmlFor="defaultPayment">
                                        Bu kartı varsayılan olarak ayarla
                                    </label>
                                </div>
                                <div className="alert alert-info" role="alert">
                                    <i className="bi bi-shield-lock me-2" />
                                    Kart bilgileriniz güvenli bir şekilde saklanır ve SSL şifreleme
                                    ile korunur.
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                İptal
                            </button>
                            <button type="button" className="btn btn-primary">
                                Kaydet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="footer bg-dark text-white">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-white mb-4">ModernShop</h5>
                            <p>
                                Kaliteli ürünler, uygun fiyatlar ve mükemmel müşteri deneyimi için
                                doğru adres.
                            </p>
                            <div className="social-icons">
                                <a href="#" className="text-white me-3">
                                    <i className="bi bi-facebook" />
                                </a>
                                <a href="#" className="text-white me-3">
                                    <i className="bi bi-twitter" />
                                </a>
                                <a href="#" className="text-white me-3">
                                    <i className="bi bi-instagram" />
                                </a>
                                <a href="#" className="text-white">
                                    <i className="bi bi-youtube" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-white mb-4">Hızlı Bağlantılar</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#" className="text-white-50">
                                        Ana Sayfa
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white-50">
                                        Ürünler
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white-50">
                                        Kampanyalar
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white-50">
                                        Yeni Gelenler
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white-50">
                                        Siparişlerim
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-white mb-4">Yardım</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#" className="text-white-50">
                                        Sipariş Takibi
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white-50">
                                        İade ve Değişim
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white-50">
                                        Kargo Bilgileri
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white-50">
                                        Ödeme Seçenekleri
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white-50">
                                        S.S.S.
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">İletişim</h5>
                            <p className="text-white-50 mb-2">
                                <i className="bi bi-geo-alt me-2" /> Atatürk Cad. No:123, İstanbul
                            </p>
                            <p className="text-white-50 mb-2">
                                <i className="bi bi-telephone me-2" /> (0212) 123 45 67
                            </p>
                            <p className="text-white-50 mb-4">
                                <i className="bi bi-envelope me-2" /> info@modernshop.com
                            </p>
                            <div>
                                <img
                                    src="https://www.claudeusercontent.com/api/placeholder/200/40"
                                    alt="Ödeme Yöntemleri"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                    <hr className="my-4 bg-secondary" />
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-0 text-white-50">
                                © 2025 ModernShop. Tüm hakları saklıdır.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="#" className="text-white-50">
                                        Gizlilik Politikası
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <span className="text-white-50">•</span>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="text-white-50">
                                        Kullanım Koşulları
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Bootstrap JS */}
            {/* Custom JavaScript */}
        </>

    )
}

export default Profile;