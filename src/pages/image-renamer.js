import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../components/data"
import Products from "../components/products"
import ProductBanner from "../components/productBanner"

const product = data['imageRenamer'];

const ImageRenamer = () => (
  <Layout>
    <SEO title={product.title} />
    <ProductBanner title={product.title} description={product.description} category={product.category} />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <section className="downloads">
            <a href={"../downloads/Image-Renamer-v1.0.zip"} className="btn btn-download btn-white btn-large">Download<span>Windows file</span></a>
            <a href={"../downloads/Image-Renamer-v1.0-app.zip"} className="btn btn-download btn-white btn-large">Download<span>Mac app</span></a>
          </section>
          <section className="section-small">
            <div class="page-content">
              <h3>Instructions</h3>
              <ul>
                <li>Add a source directory to load in files</li>
                <li>Use the file filter fields to select only desired files</li>
                <li>Enter a new name, the amount of frame padding &amp; the file extension. All fields optional.</li>
                <li>The lower table allows you to preview the output before renaming</li>
              </ul>
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

export default ImageRenamer
