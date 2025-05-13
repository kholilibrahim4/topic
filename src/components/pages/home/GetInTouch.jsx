import SectionTitle from '../../SectionTitle'
import { Container, Row, Col } from 'react-bootstrap'
import OfficeAddress from './OfficeAddress'
import PhoneOrEmail from './PhoneOrEmail'


export default function GetInTouch() {
    return (
        <section className="contact-section section-padding section-bg" id="section_5">
            <Container>
                <Row>
                    <SectionTitle headingClasses='mb-5' lg={12} className='text-center' title='Get in touch' />
                    <Col lg={5} className="mb-4 mb-lg-0">
                        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth" width="100%" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>

                    <OfficeAddress
                        officeName="Head office"
                        address="Bay St &amp;, Larkin St, San Francisco, CA 94109, United States">
                        <PhoneOrEmail title='Phone' link='tel:305-240-9671' />
                        <PhoneOrEmail title='Email' link='mailto:info@company.com' />
                    </OfficeAddress>
                    <OfficeAddress
                        officeName="Dubai office"
                        address="Burj Park, Downtown Dubai, United Arab Emirates">
                        <PhoneOrEmail title='Phone' link='tel:110-220-3400' />
                        <PhoneOrEmail title='Email' link='mailto:example@company.com' />
                    </OfficeAddress>

                </Row>
            </Container>
        </section>
    )
}
