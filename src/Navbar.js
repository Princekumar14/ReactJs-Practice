
const Navbar = (props) => {
    return ( 
        <nav className="navbar">
            <h1>The Prince's Blog</h1>
            <div className="links">
                <a href="/">{props.title}</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;