import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [showDetail, setShowDetail] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const response = await res.json();
                setProducts(response)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts()
    }, [])

    const handleClickDetail = (product) => {
        setShowDetail(true);
        setCurrentProduct(product);
    }
    const handleCloseDetail = () => {
        setShowDetail(false);
        setCurrentProduct({});
    }

    return (
        <div className="products-container">
            <h2>Products</h2>
            {loading
                ? <span className="product-nodata">Loading ...</span>
                : (error
                    ? <span className="product-nodata">Error: {error}</span>
                    : (
                        <div className="product-list">
                            {products.map(element => {
                                return (<ProductCard
                                    key={element.id}
                                    product={element}
                                    click={handleClickDetail}
                                />)
                            })}
                        </div>
                    )
                )
            }

            <div className={`product-detail-overlay ${showDetail ? "show" : ""}`}>
                <div className="product-detail-card">
                    <div className="product-detail-card-header">
                        <h2>{currentProduct.title}</h2>
                        <span>UserID: {currentProduct.userId} - ID: {currentProduct.id}</span>
                        <span className="product-detail-close" onClick={handleCloseDetail}>X</span>
                    </div>
                    <div className="product-detail-card-body">
                        <p>{currentProduct.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;