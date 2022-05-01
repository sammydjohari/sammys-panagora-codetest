import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <img src="./static/panagora-logo.svg" alt="panagora logo"></img>
      <div className="menu-items">
          <ul>
            <Link to="/" className="active">Products</Link>
              <li>About</li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar
