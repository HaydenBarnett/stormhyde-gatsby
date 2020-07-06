import React from "react"

const ProductBanner = ({title, description, category}) => (
  <section className="product-banner section-medium section-blue">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p className="small animated fadeInDown delay-0"><span>{category}</span></p>
          <h1 className="animated fadeInUp delay-0">{title}</h1>
          <h2 className="animated fadeInUp delay-0">{description}</h2>
        </div>
      </div>
    </div>
  </section>
)

export default ProductBanner
