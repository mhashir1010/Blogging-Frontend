import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../Store/Store"

export const Header = () =>{
    const navigate = useNavigate();
    const {user,logout} = useUserData();
    const Logout = ()=>
    {
        localStorage.removeItem('token');
        logout();
        navigate('/auth')
    }
    
  // var links = [
  //   { title: 'Home', route: '/home', active: true },
  //   { title: 'Requests', route: '/requests', active: false },
  // ];
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="light" >
            <Container>
                <Navbar.Brand href="#!">Nisum</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="" onClick={()=>navigate('/home')} aria-current="page">Home</Nav.Link>
                        <Nav.Link href="" onClick={()=>navigate('/requests')} aria-current="page">Requests</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title={user.firstName+' '+user.lastName} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="" onClick={()=>navigate('/profile')}>Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="" onClick={Logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </>
    )
}