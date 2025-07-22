export const Nav = () => {
  return (
    <nav className="nav-links">
      <a href="../home/index.html">Home</a>
      <a href="../about/index.html">About</a>
      <a href="../product/index.html">Products</a>
      <a href="https://tinyurl.com/5633tpyb">Shop</a>
      <div className="dropdown">
        <button className="dropbtn">
          Locations <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a
            href="https://tinyurl.com/2m2cv75p"
            target="_blank"
            rel="noopener noreferrer"
          >
            UK
          </a>
          <a href="../uae/index.html">UAE</a>
        </div>
      </div>
      <a href="../contact/index.html">Contact</a>
    </nav>
  );
};
