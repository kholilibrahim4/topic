import SectionTitle from '../../SectionTitle'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import faqImg from '../../../assets/img/faq_graphic.jpg'

export default function Faq() {
    return (
        <section class="faq-section section-padding" id="section_4">
            <Container>
                <Row>
                    <SectionTitle lg={6} title="Frequently Asked Questions" />
                    <div className="clearfix"></div>
                    <Col lg={5}>
                        <img src={faqImg} class="img-fluid" alt="FAQs" />
                    </Col>
                    <Col lg={6} className='m-auto'>
                        <Accordion defaultActiveKey='0' id="accordionExample">
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>What is Topic Listing?</Accordion.Header>
                                <Accordion.Body>
                                    Topic Listing is free Bootstrap 5 CSS template. <strong>You are not allowed to redistribute this template</strong> on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>How to find a topic?</Accordion.Header>
                                <Accordion.Body>
                                    You can search on Google with <strong>keywords</strong> such as templatemo portfolio, templatemo one-page layouts, photography, digital marketing, etc.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>Does it need to paid?</Accordion.Header>
                                <Accordion.Body>
                                    You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}