import '../Navbar/navbar.css';
export function Navebar() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "#ea1b3d" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img height={"25px"} width={"125px"} style={{marginTop:"-10px"}} src="/img/logo-no-background.png" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            </li>
          </ul>
          <div className="d-flex">
              <a className="nav-link active" aria-current="page" href="#">
                <i class='fas fa-crown me-5 crown' style={{ fontSize: "25px",color:"yellow" }}></i>
              </a>
            <div className="d-flex">
              <div className="input-group mt-1">
                <input id="search" style={{ height: "35px", color: "#ea1b3d" }} type="text" className="form-control" placeholder="Search" />
                <span style={{ height: "35px", backgroundColor: "white" }} className="input-group-text"><i className="bi bi-search" style={{ color: "#ea1b3d", fontWeight: "bold", fontSize: "20px" }}></i></span>
              </div>
              <a className="nav-link" href="#">
                <i class="bi bi-bell-fill" style={{ color: "lightGray" }}></i>
              </a>
            </div>
            <a className="nav-link" href="#">
              <img src="/img/user.png" style={{ height: "25px", width: "25px", borderRadius: "50%" }} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  </>
}