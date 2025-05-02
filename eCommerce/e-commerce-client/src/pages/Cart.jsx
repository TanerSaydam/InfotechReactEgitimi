import axios from "axios";
import { useEffect, useState } from "react";
import { useCountStore } from "../states/count.state";

function Cart() {
    const [carts, setCarts] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalPart, setTotalPart] = useState({
        total: 0,
        cargo: 0,
        discount: 0,
        remain: 0
    });
    const { inc,count, fetch} = useCountStore();

    async function getProducts() {
        const response = await axios.get("https://localhost:7159/products?pageSize=5&pageNumber=1&orderByPrice=asc");
        setProducts(response.data.data);
    };

    function formatToTRY(value) {
        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', minimumFractionDigits: 2 }).format(value);
    }

    async function getAll() {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        try {
            var res = await axios.get("https://localhost:7159/carts", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setCarts(res.data);

            calculateTotal(res.data);
        } catch (error) {
            console.log(error);
            alert("Bir hata oluştu");
        }
    }

    function calculateTotal(carts) {
        let total = 0;
        carts.forEach((cart) => {
            total += cart.product.price * cart.quantity;
        });
        setTotalPart({
            ...totalPart,
            total: total * 1.20,
            cargo: 29.99 * carts.length,
            discount: total * 1.20 - total,
            remain: total
        });
    }

    // az kod yazma ve kodu okunabilir tutma arasında kalırsanız => Kodu okunabilir tutmayı seçin

    async function addBasket(productId) {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        try {
            var res = await axios.post("https://localhost:7159/carts", { productId: productId }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert(res.data.data);
            getAll();
            inc();
        } catch (error) {
            console.log(error);
            alert("Bir hata oluştu");
        }
    }

    async function removeBasket(cartId) {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        let endpoint = "https://localhost:7159/carts";
        if (cartId) {
          endpoint += `?id=${cartId}`;
        }else{
           var result = confirm("Sepeti temizlemek istediğinize emin misiniz?");
           if(!result) return;
        }

        try {
            var res = await axios.delete(endpoint, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert(res.data.data);
            getAll();
            fetch();
        } catch (error) {
            console.log(error);
            alert("Bir hata oluştu");
        }
    }

    useEffect(() => {
        getAll();
        getProducts();
    }, []);

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
                {
                    carts.length === 0 ? (
                        <section className="cart-section" style={{ height: "62vh" }}>
                            <div className="container d-flex justify-content-center align-items-center w-100" style={{ height: "100%" }}>
                                <h1 className="alert alert-danger">Sepette ürün bulunamadı</h1>
                            </div>
                        </section>
                    )
                        : (
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
                                                            <h5 className="mb-0">Ürünler ({carts.length})</h5>
                                                        </div>
                                                        <div className="col-6 text-end">
                                                            <button className="btn btn-sm btn-outline-secondary" onClick={() => removeBasket(null)}>
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
                                                                {carts.map((val, i) => {
                                                                    return (
                                                                        <tr className="cart-item" key={i}>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <img
                                                                                        src={"https://localhost:7159/images/products/" + val.product.imageUrl}
                                                                                        className="product-image rounded"
                                                                                        alt={val.product.name}
                                                                                        style={{ width: "80px", height: "80px" }}
                                                                                    />
                                                                                    <div className="ms-3">
                                                                                        <h6 className="mb-1">{val.product.name}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="text-center">
                                                                                <span className="fw-bold">
                                                                                    {formatToTRY(val.product.price)}
                                                                                </span>
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
                                                                                <span className="fw-bold">
                                                                                    {formatToTRY(val.product.price * val.quantity)}
                                                                                </span>
                                                                            </td>
                                                                            <td className="text-center" style={{cursor: "pointer"}} onClick={() => removeBasket(val.id)}>
                                                                                <i className="bi bi-trash remove-item" />
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })}
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
                                                    {products.map((val, i) => {
                                                        return (
                                                            <div className="similiar-product-card" key={i}>
                                                                <img
                                                                    src={"https://localhost:7159/images/products/" + val.imageUrl}
                                                                    className="card-img-top"
                                                                    alt={val.name}
                                                                    style={{ height: "880px", width: "880px", objectFit: "contain" }}
                                                                />
                                                                <div className="card-body px-0">
                                                                    <h6 className="card-title">{val.name}</h6>
                                                                    <p className="card-text fw-bold">{formatToTRY(val.price)}</p>
                                                                    <button className="btn btn-sm btn-primary" onClick={() => addBasket(val.id)}>
                                                                        Sepete Ekle
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
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
                                                        <span className="fw-bold">{formatToTRY(totalPart.total)}</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <span>Kargo:</span>
                                                        <span className="fw-bold">{formatToTRY(totalPart.cargo)}</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-2 text-success">
                                                        <span>İndirim:</span>
                                                        <span className="fw-bold">-{formatToTRY(totalPart.discount)}</span>
                                                    </div>
                                                    <hr />
                                                    <div className="d-flex justify-content-between mb-4">
                                                        <span className="fw-bold">Toplam:</span>
                                                        <span className="fw-bold fs-5">{formatToTRY(totalPart.remain)}</span>
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
                        )
                }
            </>
        </>
    )
}

export default Cart;