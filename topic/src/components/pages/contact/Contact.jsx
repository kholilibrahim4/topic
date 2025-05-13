import Layout from '../../Layout'
import HeaderOtherPage from '../../HeaderOtherPage'
import NavBar from '../../Nav'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../Footer'
import SectionTitle from '../../SectionTitle'
import FormComp from './Form'



export default function Contact() {
    return (
        <>
        <Layout>
            <NavBar />
            <HeaderOtherPage currentPage='Contact Form' />

            <section class="section-padding section-bg">
                <Container>
                    <Row>
                        <SectionTitle title="We'd love to hear from you" headingClasses='fs-2 pb-2' />
                        <FormComp />
                        <Col lg={5} className="mx-auto mt-5 mt-lg-0">
                        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth" width="100%" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        <h5 className="mt-4 mb-2">Topic Listing Center</h5>

                        <p>Bay St &amp;, Larkin St, San Francisco, CA 94109, United States</p>
                    </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
        <Footer />
        </>
    )
}