import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../components/data"
import Products from "../components/products"
import ProductBanner from "../components/productBanner"

const product = data['scrambler'];

const Scrambler = () => (
  <Layout>
    <SEO title={product.title} />
    <ProductBanner title={product.title} description={product.description} category={product.category} />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <section className="downloads">
            <a href={"../downloads/Scrambler-v1.1.zip"} className="btn btn-download btn-white btn-large">Download<span>Windows file</span></a>
            <a href={"../downloads/Scrambler-v1.1-app.zip"} className="btn btn-download btn-white btn-large">Download<span>Mac app</span></a>
          </section>
          <section className="section-small">
            <div class="page-content">
              <p>A simple application that takes two words and scrambles them together to make new words for idea generation and naming.</p>
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

export default Scrambler
