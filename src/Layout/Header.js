import { useNavigate } from "react-router-dom"

export const Header = () =>{
    const navigate = useNavigate();
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#!">
                <img src="/public/logo192.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />Nisum</a>
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className={"nav-link "} onClick={()=>navigate('/home')} aria-current="page" href>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>navigate('/requests')} href>Requests</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>navigate('/chat')} href>Chat</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href onClick={()=>navigate('/about')} >About</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>
        </>
    )
}