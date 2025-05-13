import { Container, Row, Col } from 'react-bootstrap'


import FeaturedSingle from './FeaturedSingle'

import Finance from './Finance'
import SocilaMedia from '../../SocilaMedia'



//images import
import featuredImg1 from '../../../assets/img/topics/img1.png'
import featuredImg2 from '../../../assets/img/topics/img (10).png'
import featuredImg3 from '../../../assets/img/topics/img (12).png'


import featuredImg4 from '../../../assets/img/topics/img (8).png'
import featuredImg5 from '../../../assets/img/topics/img (6).png'
import featuredImg6 from '../../../assets/img/topics/img (11).png'


import featuredImg7 from '../../../assets/img/topics/img (4).png'
import businesswoman from '../../../assets/img/businesswoman.jpg'






export default function TabContent() {
    return (
        <Container>
            <Row>

                <Col>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="design-tab-pane" role="tabpanel" aria-labelledby="design-tab" tabindex="0">
                            <Row>
                                <FeaturedSingle
                                    title='Web Design'
                                    description='Topic Listing Template based on Bootstrap 5'
                                    badgeCount={11}
                                    featuredImg={featuredImg1}

                                />
                                <FeaturedSingle
                                    title='Graphic'
                                    description='Topic Listing Template based on Bootstrap 5'

                                    badgeCount={17}
                                    featuredImg={featuredImg2}

                                />
                                <FeaturedSingle
                                    title='Logo Design'
                                    description='Topic Listing Template based on Bootstrap 5'

                                    badgeCount={16}
                                    featuredImg={featuredImg3}

                                />
                            </Row>
                        </div>

                        <div class="tab-pane fade" id="marketing-tab-pane" role="tabpanel" aria-labelledby="marketing-tab" tabindex="0">
                            <Row>
                                <FeaturedSingle
                                    title='Advertising'
                                    description='Lorem Ipsum dolor sit amet consectetur'

                                    badgeCount={16}
                                    featuredImg={featuredImg4}

                                />
                                <FeaturedSingle
                                    title='Video Content'
                                    description='Topic Listing Template based on Bootstrap 5'

                                    badgeCount={16}
                                    featuredImg={featuredImg5}

                                />
                                <FeaturedSingle
                                    title='Viral Tweet'
                                    description='Topic Listing Template based on Bootstrap 5'

                                    badgeCount={16}
                                    featuredImg={featuredImg6}

                                />
                            </Row>
                        </div>


                        <div class="tab-pane fade" id="finance-tab-pane" role="tabpanel" aria-labelledby="finance-tab" tabindex="0">
                            <Row>
                                <FeaturedSingle
                                    title='Investment'
                                    description='Lorem Ipsum dolor sit amet consectetur'

                                    badgeCount={16}
                                    featuredImg={featuredImg7}

                                />

                                <Finance
                                    title="Finance"
                                    description="Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements"
                                    badgeCount={35}
                                    featuredImg={businesswoman}>
                                    <SocilaMedia />
                                </Finance>


                            </Row>
                        </div>



                    </div>
                </Col>
            </Row>
        </Container>
    )
}