import React, { useState } from "react"
import Slider from "react-slick"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../components/data"
import Products from "../components/products"
import ProductBanner from "../components/productBanner"

import image1 from "../images/products/map-converter/map-converter-1.png"
import image2 from "../images/products/map-converter/map-converter-2.png"

const MapConverter = () => {
  const product = data['mapConverter'];
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
              <a href={"../downloads/Map-Converter-v1.0.zip"} className="btn btn-download btn-white btn-large">Download<span>Windows file</span></a>
              <a href={"../downloads/Map-Converter-v1.0-app.zip"} className="btn btn-download btn-white btn-large">Download<span>Mac app</span></a>
            </section>
            <section className="section-small">
              <div className="page-content">
                <p>Converts standard image files (jpg, png, tif etc) into memory mappable (.map) files for use with Mental Ray.</p>
                <p>The .map files are Mental Ray’s native format and work very efficiently in comparison to normal images when rendering.</p>
                <p>This works using the Autodesk Maya executable imf_copy.exe</p>
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

export default MapConverter
