import logo from "../logo.svg"
import { NavLink, Link, Outlet } from "react-router-dom"

const ShareLayout = () => {
  return (
    <>
      <div className="heading">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <div>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              About
            </NavLink>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  )
}
export default ShareLayout
