import { Container, Row, Col } from 'react-bootstrap'
import Logo from './Logo'
import FooterLink from './FooterLink'
import OfficeAddress from './pages/home/OfficeAddress'
import PhoneOrEmail from './pages/home/PhoneOrEmail'
import Language from './Language'


export default function Footer() {
  return (
    <footer class="site-footer section-padding">
        <Container>
            <Row>
                <Col lg={3} className='mb-4 pb-2'>
                    <Logo />
                </Col>
                <FooterLink />
                <OfficeAddress
                officeName="Information" >
                        <PhoneOrEmail title='Phone' link='tel:305-240-9671' />
                        <PhoneOrEmail title='Email' link='mailto:info@company.com' />
                </OfficeAddress>
                <Language />
                
            </Row>
        </Container>
    </footer>
  )
}
