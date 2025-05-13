
import {Container, Row, Col, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function HeaderOtherPage({currentPage}){
    return(

            <header className="site-header d-flex flex-column justify-content-center align-items-center">
                <Container>
                    <Row className="align-items-center">

                        <Col lg={5}>
                            <Nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Homepage</Link></li>

                                    <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
                                </ol>
                            </Nav>

                            <h2 className="text-white">{currentPage}</h2>
                        </Col>

                    </Row>
                </Container>
            </header>

        )
}