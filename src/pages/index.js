import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products"

const IndexPage = () => (
  <Layout>
    <SEO title="Free software &amp; resources" />
    <section className="home-banner section-blue section-large section-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="animated fadeInUp">Free software &amp; resources</h1>
            <h2 className="animated fadeInUp"><p>Created for animators for use with Autodesk Maya</p></h2>
          </div>
        </div>
      </div>
    </section>
    <Products />
  </Layout>
)

export default IndexPage
