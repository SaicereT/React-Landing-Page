import React from "react";

const Navbar = (props) => {
    function genNavItems () {
      return props.items.map (items =>{
        return (
          <a className={items.active?"active nav-link" : "nav-link"} href={items.href}>{items.text}</a>
        )
      })
    }

    return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-5">
  <div className="container-fluid justify-content-between">
    <div>
      <a className="navbar-brand" href="#">Start Bootstrap</a>
    </div>
    <div className="">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        {genNavItems()}
      </ul>
    </div>
  </div>
</nav>);
};

export default Navbar;