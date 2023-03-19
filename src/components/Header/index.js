import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  const wave = 'https://assets.ccbp.in/frontend/react-js/wave-logo-img.png'
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="img-container">
          <img src={wave} alt="wave" className="img" />
          <p className="heading mar">Wave</p>
        </div>
        <ul className="nav-container">
          <li className="heading">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="heading">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="heading">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
