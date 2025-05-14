import { Container, Row, Col } from 'react-bootstrap'
import TopicSingle from './TopicSingle'

import topicImg1 from '../../../assets/img/topics/img1.png'
import topicImg2 from '../../../assets/img/topics/img (8).png'
import topicImg3 from '../../../assets/img/topics/img (9).png'
import SectionTitle from '../../SectionTitle'
import PaginationComp from '../../Pagination'


export default function Topics() {
    return (
        <section className="section-padding">
            <Container >
                <Row>
                    <SectionTitle title='Popular Topics' headingClasses="fs-2" className="text-center"/>
                    <Col lg={8} className="mt-3 mx-auto">
                        <TopicSingle
                            title='Web Design'
                            description='Topic Listing includes home, listing, detail and contact pages. Feel free to modify this template for your custom websites.'
                            badgeCount={13}
                            badgeType='bg-design'
                            topicImg={topicImg1}
                        />
                        <TopicSingle
                            title='Advertising'
                            description='Visit TemplateMo website to download free CSS templates. Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus'
                            badgeCount={13}
                            badgeType='bg-advertising'
                            topicImg={topicImg2}
                        />
                        <TopicSingle
                            title='Podcast'
                            description='Topic Listing includes home, listing, detail and contact pages. Feel free to modify this template for your custom websites.'
                            badgeCount={13}
                            badgeType='bg-music'
                            topicImg={topicImg3}
                        />
                    </Col>
                    <PaginationComp />
                </Row>
            </Container>
        </section>
    )
}
