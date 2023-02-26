import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function CollapsibleExample() {
  // const navigate = useNavigate();

  return (
   
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor:'#384241' }} variant="dark">
      <Container >
        <Navbar.Brand href="#home">Sparkle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Orders" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/SearchPage">In store purchase</NavDropdown.Item>
              <NavDropdown.Item href="#special">Special Order</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/refund">Refund</Nav.Link>
            <Nav.Link href="#repair">Repair</Nav.Link>
            <Nav.Link href="#track">Track</Nav.Link>
            <NavDropdown title="Inventory" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/viewStock">View</NavDropdown.Item>
              <NavDropdown.Item href="/modifyStock">Modify Stock</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="User Management" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Register">Add Employee</NavDropdown.Item>
              <NavDropdown.Item href="/emplist">View Employee List</NavDropdown.Item>
              <NavDropdown.Item href="/rememplist">Remove Employee</NavDropdown.Item>
              <NavDropdown.Item href="/logout">logout</NavDropdown.Item>
              
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default CollapsibleExample;