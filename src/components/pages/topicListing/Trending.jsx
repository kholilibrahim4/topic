import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../../SectionTitle'
import FeaturedSingle from '../home/FeaturedSingle'
import featuredImg1 from '../../../assets/img/topics/img (4).png'

import businesswoman from '../../../assets/img/businesswoman.jpg'
import Finance from '../home/Finance'
import SocilaMedia from '../../SocilaMedia'


export default function Trending() {
  return (
    <section class="section-padding section-bg">
      <Container>
        <Row>
          <SectionTitle title='Trending Topics' lg={12} headingClasses='fs-2' />
          <Col lg={6} md={6} className='mt-3 mb-4 mb-lg-0'>
            <FeaturedSingle
              title='Investment'
              description='Lorem Ipsum dolor sit amet consectetur'
              badgeCount={12}
              featuredImg={featuredImg1} />
          </Col>
          <Finance
              className='mt-lg-3'
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
