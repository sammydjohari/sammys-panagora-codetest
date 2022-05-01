import { useParams } from 'react-router-dom'
import products from '../data/products.json'


function ProductInfo() {


let { id } = useParams();


console.log('id is', id)


    return (
      <div className="product-info-card">
        <img src={products[id].image}></img>
        <section className="info-text">
          <h3 className="info-name">{products[id].name}</h3>
          <h4 className="info-price">{products[id].price} {products[id].currency}</h4>
          <p className="info-desc">{products[id].description}</p>
          <button>Add to cart</button>
        </section>
      </div>
    )
  }
  
 
  
  export default ProductInfo
  