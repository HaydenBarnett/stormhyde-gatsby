import React, { useState } from "react"
import Slider from "react-slick"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../components/data"
import Products from "../components/products"
import ProductBanner from "../components/productBanner"

import image1 from "../images/products/batch-script-generator/batch-script-generator-1.png"
import image2 from "../images/products/batch-script-generator/batch-script-generator-2.png"
import image3 from "../images/products/batch-script-generator/batch-script-generator-3.png"
import image4 from "../images/products/batch-script-generator/batch-script-generator-4.png"

const BatchScriptGenerator = () => {
  const product = data['batchScriptGenerator'];
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
              <a href={"../downloads/Batch-Script-Generator-v1.3.zip"} className="btn btn-download btn-white btn-large">Download<span>Windows exe</span></a>
              <a href={"../downloads/Batch-Script-Generator-v1.3-app.zip"} className="btn btn-download btn-white btn-large">Download<span>Mac app</span></a>
            </section>
            <section className="section-small">
              <div className="page-content">
                <h3>Instructions</h3>
                <ul>
                  <li>Load your .ma or .mb file and enter render data then press ‘Add Render Line’</li>
                  <li>Once finished the batch script can be generated with ‘Create Batch Script’</li>
                  <li>Any fields not specified simply are not included in the generated script.</li>
                  <li>All fields are optional except the scene file.</li>
                  <li>Can also generate a test script that renders only the first frame of each scene.</li>
                  <li>Custom render flags to change options such as resolution, file type, render messages and number of cores to use. Applies to all scenes</li>
                  <li>Automatically create log files for each render line</li>
                  <li>Select post render tasks such as opening a file or shutting down or logging off the computer automatically</li>
                  <li>Able to load batch file information straight back into the program
                    <ul>
                      <li>File &gt; Open Script or File &gt; Add Script</li>
                    </ul>
                  </li>
                </ul>
                <p>&nbsp;</p>
                <h3>Notes for rendering on a Mac OS</h3>
                <p>The Render executable file you require will be located in a path similar to</p>
                <p>/Applications/Autodesk/maya2015/Maya.app/Contents/bin/Render</p>
                <p>The file you save must also be made executable before it is run.</p>
                <ul>
                  <li>One way to do this is to:</li>
                  <li>rename the file from .sh to .command</li>
                  <li>open Terminal</li>
                  <li>cd to your current directory</li>
                  <li>chmod 700 yourfilename.command</li>
                </ul>
                <p>The file will now run when double clicked.</p>
                <p>&nbsp;</p>
                <h3>More</h3>
                <p>Shaun Keenan has created a basic video tutorial available on <a href="http://cg.tutsplus.com/tutorials/autodesk-maya/quick-tip-create-a-batch-script-to-render-maya-scenes/">3D Ocean</a></p>
                <p>The Batch Script Generator is also&nbsp;available to download on <a href="http://www.creativecrash.com/downloads/applications/render-managers/c/batch-script-generator">creativecrash.com</a></p>
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
                </Slider>
              </div>
              <div className="slider slider-lower">
                <Slider {...data.settingsLower} asNavFor={slider1} ref={slider => setSlider2(slider)}>
                  <div className="slide"><img src={image1} alt="" /></div>
                  <div className="slide"><img src={image2} alt="" /></div>
                  <div className="slide"><img src={image3} alt="" /></div>
                  <div className="slide"><img src={image4} alt="" /></div>
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

export default BatchScriptGenerator
