import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section-banner section-blue section-large">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              <h1 className="animated fadeInUp">Nothing found</h1>
              <h2 className="animated fadeInUp"><p>We cannot find what you were looking for. <br />Was it one of our products below?</p></h2>
          </div>
        </div>
      </div>
    </section>
    <Products />
  </Layout>
)

export default NotFoundPage
