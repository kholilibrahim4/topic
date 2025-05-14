import * as Icon from 'react-bootstrap-icons'
import Button from '../../Button'
import { Container, Row, Col } from 'react-bootstrap'



export default function HomeHero() {
    return (
        <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
            <Container>
                <Row>

                    <Col Lg={8} className="mx-auto">
                        <h1 className="text-white text-center">Discover. Learn. Enjoy</h1>

                        <h6 className="text-center">platform for creatives around the world</h6>

                        <form method="get" className="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">
                            <div className="input-group input-group-lg">
                                <span className="input-group-text" id="basic-addon1">
                                    <Icon.Search />
                                </span>

                                <input name="keyword" type="search" className="form-control" id="keyword" placeholder="Design, Code, Marketing, Finance ..." aria-label="Search" />


                                <Button type="submit" text="Search" btnLinkClasses="form-control"/>
                            </div>
                        </form>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
