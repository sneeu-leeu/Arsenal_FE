import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Top() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='mb-4'> 
        <Container>
          <Navbar.Brand href="/">Arsenal FC</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="/manage">Manage Team</Nav.Link>
            <Nav.Link href="/squad">Full Squad</Nav.Link>
            <Nav.Link href="/fixtures">Fixtures</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Top;