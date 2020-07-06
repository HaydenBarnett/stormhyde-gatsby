import React from "react"
import Tile from "./tile"
import data from "./data"

const Products = () => (
  <section className="products" style={{marginTop:'-30px'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <Tile {...data.batchScriptGenerator} />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <Tile {...data.mapConverter} />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <Tile {...data.imageRenamer} />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <Tile {...data.scrambler} />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <Tile {...data.demon} />
        </div>
      </div>
    </div>
  </section>
)

export default Products
