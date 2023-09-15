import { Link } from "react-router-dom";

export default function Navbar(){
    return<>
    <nav class="navbar navbar-expand-lg fixed-top py-4">
  <div class="container">
    <Link class="navbar-brand navbar-brand text-white text-uppercase fw-bolder fs-2" to="/">START FRAMEWORK</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item me-3">
          <Link class="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" aria-current="page" to="About">About</Link>
        </li>
        <li class="nav-item me-3">
          <Link class="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="#">PORTFOLIO</Link>
        </li>
        <li class="nav-item me-3">
          <Link class="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="Contact">CONTACT</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    
    </>
}