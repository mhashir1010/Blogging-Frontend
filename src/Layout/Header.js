import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { delUser, setUser } from "../Store/Actions/UserActions";
import { ReduxStore } from "../Store/ReduxStore";
import { useUserData } from "../Store/Store";

export const Header = () =>{
    const navigate = useNavigate();
    var user = ReduxStore.getState().user.user;
    if(user===undefined){
        setUser();
    }

    const Logout = ()=>
    {
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('userId');
        delUser();
        // logout();
        navigate('/auth')
    }
    
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
                        {user && <NavDropdown title={user?.firstName+' '+user?.lastName} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="" onClick={()=>navigate('/profile')}>Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="" onClick={Logout}>Logout</NavDropdown.Item>
                        </NavDropdown>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </>
    )
}