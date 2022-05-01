import ProductInfo from "./ProductInfo"
import products from "../data/products.json"; 

function InfoCard() {
  return (
    <div>
        <section className="info-card">
            {products.map((product) =>
            <>
            <ProductInfo product={product}/>
            </>
            )}

        </section>
      
    </div>
  )
}


export default InfoCard
