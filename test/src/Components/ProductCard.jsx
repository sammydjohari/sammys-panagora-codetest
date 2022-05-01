import { Link } from "react-router-dom"


function ProductCard({product}) {
  return (
    <div className="card">
        <Link to="/product">
          <img src={product.thumbnail}></img>
          <p className="card-name">{product.name}</p>
          <p className="card-price">{product.price} {product.currency}</p>
          </Link>
    </div>
  )
}

export default ProductCard
