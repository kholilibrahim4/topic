import { Col } from 'react-bootstrap'

export default function OfficeAddress({ officeName, address, children}) {
  return (
    <Col lg={3} md={6} className="mb-3 mb-md-0 ms-auto">
      <h4 class="mb-3">{officeName}</h4>
      <p>{address}</p>
      <hr />

      {children}
    </Col>
  )
}
