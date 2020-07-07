import React, { useState } from "react"
import Slider from "react-slick"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../components/data"
import Products from "../components/products"
import ProductBanner from "../components/productBanner"

import image1 from "../images/products/demon/demon-1.jpg"
import image2 from "../images/products/demon/demon-2.jpg"
import image3 from "../images/products/demon/demon-3.jpg"
import image4 from "../images/products/demon/demon-4.jpg"
import image5 from "../images/products/demon/demon-5.jpg"

const Demon = () => {
  const product = data['demon'];
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
              <a href={"../downloads/demonRigged-v1.0.zip"} className="btn btn-download btn-white btn-large">Download<span>zip package</span></a>
            </section>
            <section className="section-small">
              <div className="page-content">
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
            <section className="gallery">
              <div className="slider slider-upper">
                <Slider {...data.settingsUpper} asNavFor={slider2} ref={slider => setSlider1(slider)}>
                  <div className="slide"><img src={image1} alt="" /></div>
                  <div className="slide"><img src={image2} alt="" /></div>
                  <div className="slide"><img src={image3} alt="" /></div>
                  <div className="slide"><img src={image4} alt="" /></div>
                  <div className="slide"><img src={image5} alt="" /></div>
                </Slider>
              </div>
              <div className="slider slider-lower">
                <Slider {...data.settingsLower} asNavFor={slider1} ref={slider => setSlider2(slider)}>
                  <div className="slide"><img src={image1} alt="" /></div>
                  <div className="slide"><img src={image2} alt="" /></div>
                  <div className="slide"><img src={image3} alt="" /></div>
                  <div className="slide"><img src={image4} alt="" /></div>
                  <div className="slide"><img src={image5} alt="" /></div>
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

export default Demon
