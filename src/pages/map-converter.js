import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../components/data"
import Products from "../components/products"
import ProductBanner from "../components/productBanner"

const product = data['mapConverter'];

const MapConverter = () => (
  <Layout>
    <SEO title={product.title} />
    <ProductBanner title={product.title} description={product.description} category={product.category} />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <section className="downloads">
            <a href={"../downloads/Map-Converter-v1.0.zip"} className="btn btn-download btn-white btn-large">Download<span>Windows file</span></a>
            <a href={"../downloads/Map-Converter-v1.0-app.zip"} className="btn btn-download btn-white btn-large">Download<span>Mac app</span></a>
          </section>
          <section className="section-small">
            <div class="page-content">
              <p>Converts standard image files (jpg, png, tif etc) into memory mappable (.map) files for use with Mental Ray.</p>
              <p>The .map files are Mental Ray’s native format and work very efficiently in comparison to normal images when rendering.</p>
              <p>This works using the Autodesk Maya executable imf_copy.exe</p>
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

export default MapConverter
