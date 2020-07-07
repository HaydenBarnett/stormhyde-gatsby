import React, { useState } from "react"
import Slider from "react-slick"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../components/data"
import Products from "../components/products"
import ProductBanner from "../components/productBanner"

import image1 from "../images/products/scrambler/scrambler-1.png"
import image2 from "../images/products/scrambler/scrambler-2.png"

const Scrambler = () => {
  const product = data['scrambler'];
  const [slider1, setSlider1] = useState();
  const [slider2, setSlider2] = useState();

  return (
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
              <div className="page-content">
                <p>A simple application that takes two words and scrambles them together to make new words for idea generation and naming.</p>
              </div>
            </section>
          </div>
          <div className="col-md-6">
            <section className="gallery">
              <div className="slider slider-upper">
                <Slider {...data.settingsUpper} asNavFor={slider2} ref={slider => setSlider1(slider)}>
                  <div className="slide"><img src={image1} alt="" /></div>
                  <div className="slide"><img src={image2} alt="" /></div>
                </Slider>
              </div>
              <div className="slider slider-lower">
                <Slider {...data.settingsLower} asNavFor={slider1} ref={slider => setSlider2(slider)}>
                  <div className="slide"><img src={image1} alt="" /></div>
                  <div className="slide"><img src={image2} alt="" /></div>
                </Slider>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Products />
    </Layout>
  )
}

export default Scrambler
