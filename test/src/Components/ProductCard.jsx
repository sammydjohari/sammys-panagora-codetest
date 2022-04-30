
function ProductCard({product}) {
  return (
    <div className="card">
          <img src={product.thumbnail}></img>
          <p className="card-name">{product.name}</p>
          <p className="card-price">{product.price} {product.currency}</p>
    </div>
  )
}

export default ProductCard
