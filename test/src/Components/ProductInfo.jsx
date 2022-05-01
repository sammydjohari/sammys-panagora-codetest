
function ProductInfo({product}) {
console.log('productinfo', product.name)



    return (
      <div className="product-info-card">
        <img src={product.image}></img>
        <section className="info-text">
          <h3 className="info-name">{product.name}</h3>
          <h4 className="info-price">{product.price} {product.currency}</h4>
          <p className="info-desc">{product.description}</p>
          <button>Add to cart</button>
          </section>
      </div>
    )
  }
  
 
  
  export default ProductInfo
  