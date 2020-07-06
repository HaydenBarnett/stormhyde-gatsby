import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../components/data"
import Products from "../components/products"
import ProductBanner from "../components/productBanner"

const product = data['demon'];

const Demon = () => (
  <Layout>
    <SEO title={product.title} />
    <ProductBanner title={product.title} description={product.description} category={product.category} />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <section className="downloads">
            <a href={"../downloads/demonRigged-v1.0.zip"} className="btn btn-download btn-white btn-large">Download<span>zip package</span></a>
          </section>
          <section className="section-small">
            <div class="page-content">
              <h3>Includes</h3>
              <ul>
                <li>.ma &amp; .mb file with basic rig ready for animation</li>
                <li>.obj file with mesh</li>
                <li>Diffuse texture (also applied as bump in preview renders)</li>
              </ul>
              <p>Free for personal &amp; commercial use.</p>
              <p>Also available to download on <a href="http://www.turbosquid.com/3d-models/demon-rig-ma-free/639934">Turbosquid</a>.</p>
            </div>
          </section>
        </div>
        <div className="col-md-6">
          <section id="gallery">
            <div className="slider slider-upper">
              <div className="slide">
                <img src="" alt="" />
              </div>
            </div>
            <div className="slider slider-lower">
              <div className="slide">
                <img src="" alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Products />
  </Layout>
)

export default Demon
