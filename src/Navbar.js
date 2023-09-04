import { NavLink } from "react-router-dom";
const Navbar = (props) => {
    return ( 
        <nav className="navbar">
            <h1>The Prince's Blog</h1>
            <div className="NavLinks">
                <NavLink to="/">{props.title}</NavLink>
                <NavLink to="/create">New Blog</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;