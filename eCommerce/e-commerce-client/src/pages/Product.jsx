import { Link, useParams } from 'react-router';
import '../styles/product.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
    let { categoryId } = useParams();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [category, setCategory] = useState({name: ""});
    const [categories, setCategories] = useState([]);
    const [productPaginationResult, setProductPaginationResult] = useState({
        data: [],
        pageNumbers: [],
        pageSize: 1,
        pageNumber: 9,
        total: 0
    });
    const [pageTitle, setPageTitle] = useState("Tüm Ürünler");

    function formatToTRY(value) {
        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', minimumFractionDigits: 2 }).format(value);
    }

    async function getCategories() {
        const response = await axios.get("https://localhost:7159/categories");
        setCategories(response.data);

        if(categoryId){
            var value = response.data.find(o => o.urlShortName === categoryId);
            if(value){
                setCategory(value);
                setPageTitle(value.name);
            }
        }
    };

    async function getProducts(pageNumber = 1, categoryUrlShortName = "", orderByPrice = "asc") {
        if(pageNumber === 0) return;
        if(pageNumber > productPaginationResult.totalPages) return;

        setSelectedCategory(categoryUrlShortName);

        let endpoint = "https://localhost:7159/products";

        if(categoryUrlShortName === "all"){
            endpoint += "?pageSize=9&pageNumber=" + pageNumber;
            setCategory({name: "Tüm Ürünler"})
            setPageTitle("Tüm Ürünler");
        }else{
            if (categoryId === undefined && categoryUrlShortName === "") {
                endpoint += "?pageSize=9&pageNumber=" + pageNumber;
            } else if(categoryUrlShortName !== "") {
                endpoint += `?categoryUrlShortName=${categoryUrlShortName}&pageSize=9&pageNumber=` + pageNumber;

                var value = categories.find(o => o.urlShortName === categoryUrlShortName);
                if(value){
                    setCategory(value);
                    setPageTitle(value.name);
                }
            } else if(categoryId !== undefined) {
                endpoint += `?categoryUrlShortName=${categoryId}&pageSize=9&pageNumber=` + pageNumber;
            }
        }

        endpoint += "&orderByPrice=" + orderByPrice;


        const response = await axios.get(endpoint);
        setProductPaginationResult(response.data);
    };

    useEffect(() => {
        setSelectedCategory(categoryId);
        getCategories();
        getProducts();
    }, [])

    function returnBreadCrumb(){
        if(categoryId){
            return(
                <li className="breadcrumb-item active" aria-current="page">
                    {category.name}
                </li>
            )
        }else{
            return<></>
        }
    }

    return (
        <>
            <>
                <section className="breadcrumb-section">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="text-decoration-none">
                                        Ana Sayfa
                                    </Link>
                                </li>
                                {returnBreadCrumb()}
                            </ol>
                        </nav>
                    </div>
                </section>
                {/* Category Banner */}
                <div className="category-banner">
                    <div className="container text-center">
                        <h1 className="display-4 fw-bold">{pageTitle}</h1>
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
                                                    <li className={"subcategory-item " + ((selectedCategory === "all" || !selectedCategory) ? "active" : "")}>
                                                        <a onClick={() => getProducts(1,"all")} className="text-decoration-none d-block">
                                                            Tüm Ürünler
                                                        </a>
                                                    </li>
                                                    {categories.map((val, i) => {
                                                        return(
                                                            <li className={"subcategory-item " + (selectedCategory === val.urlShortName ? "active" : "")} key={i}>
                                                                <a onClick={() => getProducts(1,val.urlShortName)} className="text-decoration-none d-block">
                                                                    {val.name}
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
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
                                    <span className="me-2 text-muted">{productPaginationResult.total} Ürün</span>
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
                                        <div className="sort-item me-2" onClick={() => getProducts(1,selectedCategory, "asc")}>Fiyat: Artan</div>
                                        <div className="sort-item" onClick={() => getProducts(1,selectedCategory, "desc")}>Fiyat: Azalan</div>
                                    </div>
                                </div>
                            </div>
                            {/* Products Grid */}
                            <div className="row g-3">
                                {productPaginationResult.data?.map((val, i) => {
                                    return (
                                        <div className="col-md-4 col-sm-6" key={i}>
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
                                                    <button className="btn btn-primary w-100">Sepete Ekle</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* Pagination */}
                            <nav aria-label="Page navigation" className="mt-5">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            tabIndex={-1}
                                            aria-disabled="true"
                                            onClick={() => getProducts(+productPaginationResult.pageNumber - 1, selectedCategory)}
                                        >
                                            <i className="bi bi-chevron-left" />
                                        </a>
                                    </li>
                                    {productPaginationResult.pageNumbers.map((pageNumber, i) => {
                                        return (
                                            <li className={"page-item " + (pageNumber == productPaginationResult.pageNumber ? 'active' : '')} key={i}>
                                                <a className="page-link" onClick={() => getProducts(pageNumber, selectedCategory)}>
                                                    {pageNumber}
                                                </a>
                                            </li>
                                        )
                                    })}
                                    <li className="page-item">
                                        <a className="page-link" onClick={() => getProducts(+productPaginationResult.pageNumber + 1, selectedCategory)}>
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