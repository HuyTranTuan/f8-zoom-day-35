import Button from "../Button";

function ProductCard({ product, click }) {
    const handleClickDetail = () => {
        click(product)
    }

    return (
        <>
            <div className="product-card">
                <div className="product-card-header">
                    <h2>{product.title}</h2>
                    <span>UserID: {product.userId} - ID: {product.id}</span>
                </div>
                <div className="product-card-body">
                    <p>{product.body}</p>
                </div>
                <div className="product-card-footer">
                    <Button type={"primary"} text={"Detail"} clickFunction={handleClickDetail} />
                </div>
            </div>
        </>
    )
}

export default ProductCard;