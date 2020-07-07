import React from "react"
import Tile from "./tile"
import data from "./data"

import thumb1 from '../images/products/batch-script-generator-preview.png'
import thumb2 from '../images/products/map-converter-preview.png'
import thumb3 from '../images/products/image-renamer-preview.png'
import thumb4 from '../images/products/scrambler-preview.png'
import thumb5 from '../images/products/demon-preview.jpg'

const Products = () => (
  <section className="products" style={{marginTop:'-30px'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <Tile {...data.batchScriptGenerator} thumbnail={thumb1} />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <Tile {...data.mapConverter} thumbnail={thumb2} />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <Tile {...data.imageRenamer} thumbnail={thumb3} />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <Tile {...data.scrambler} thumbnail={thumb4} />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <Tile {...data.demon} thumbnail={thumb5} />
        </div>
      </div>
    </div>
  </section>
)

export default Products
