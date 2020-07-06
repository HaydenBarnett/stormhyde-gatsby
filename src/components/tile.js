import { Link } from "gatsby"
import React from "react"

const Tile = ({url, title, description, category, image}) => (
  <Link to={url} className="card">
    <div className="card-image"></div>
    <div className="card-info">
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="meta">{category}</p>
    </div>
  </Link>
)

export default Tile