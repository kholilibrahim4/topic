import FeaturedSingle from './FeaturedSingle'
import { Container, Row } from 'react-bootstrap'
import Finance from './Finance'
import SocilaMedia from '../../SocilaMedia'


// image import
import featuredImg1 from '../../../assets/img/topics/img1.png'
import businesswoman from '../../../assets/img/businesswoman.jpg'

export default function Featured() {
  return (
    <section className="featured-section">
      <Container>
        <Row className="justify-content-center">
          <FeaturedSingle
            lg={4}
            title='Web Design'
            description='When you search for free CSS templates, you will notice that TemplateMo is one of the best websites.'
            badgeCount={13}
            featuredImg={featuredImg1}
          />


          <Finance
            title="Finance"
            description="Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements"
            badgeCount={35}
            featuredImg={businesswoman}>
            <SocilaMedia />
          </Finance>
        </Row>
      </Container>
    </section>
  )
}
