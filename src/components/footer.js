import React from "react"
import { Link } from "gatsby"
import symbol from "../images/symbol-white.svg"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <h2>Products</h2>
          <ul>
            <li><Link href="/batch-script-generator/">Batch Script Generator</Link></li>
            <li><Link href="/map-converter/">Map Converter</Link></li>
            <li><Link href="/image-renamer/">Image Renamer</Link></li>
            <li><Link href="/scrambler/">Scrambler</Link></li>
            <li><Link href="/demon/">Demon</Link></li>
          </ul>
        </div>
        <div className="col-sm-3">
          <img src={symbol} width="30" height="30" alt="Stormhyde" />
          <p>A semi-retired project by designer &amp; developer Hayden Barnett.</p>
          <p>See what Hayden has been up to recently on his portfolio website <a href="http://haydenbarnett.com">haydenbarnett.com</a></p>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
