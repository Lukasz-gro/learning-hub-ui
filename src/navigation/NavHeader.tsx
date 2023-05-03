import Nav from 'react-bootstrap/Nav';

export default function NavHeader() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/course">Courses</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About us</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}