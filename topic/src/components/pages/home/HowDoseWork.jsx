import * as Icon from 'react-bootstrap-icons'
import { Container, Row, Col } from 'react-bootstrap'

import SectionTitle from '../../SectionTitle'
import Ul from '../../Ul'
import ListProgress from './ListProgress'
import List from '../../List'
import Button from '../../Button'

export default function HowDoseWork() {



    return (
        <section className="timeline-section section-padding" id="section_3">
            <div className="section-overlay"></div>



            <Container>
                <Row>
                    <SectionTitle title="How does it work?" headingClasses={'text-white'} className="text-center"/>
                    <Col lg={10} className="mx-auto">
                        <div className="timeline-container">
                            <Ul classes="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                                <ListProgress />

                                <List>
                                    <h4 className="text-white mb-3">Search your favourite topic</h4>

                                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam numquam aliquam? Voluptas, accusamus omnis?</p>

                                    <div className="icon-holder">
                                        {/*<i className="bi-search"></i>*/}
                                        <Icon.Search size={25} />
                                    </div>
                                </List>

                                <List>
                                    <h4 className="text-white mb-3">Bookmark &amp; Keep it for yourself</h4>

                                    <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi necessitatibus aperiam repudiandae nam omnis est vel quo, nihil repellat quia velit error modi earum similique odit labore. Doloremque, repudiandae?</p>

                                    <div className="icon-holder">
                                        {/*<i className="bi-bookmark"></i>*/}
                                        <Icon.Bookmark size={25} />
                                    </div>
                                </List>

                                <List>
                                    <h4 className="text-white mb-3">Read &amp; Enjoy</h4>

                                    <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi vero quisquam, rem assumenda similique voluptas distinctio, iste est hic eveniet debitis ut ducimus beatae id? Quam culpa deleniti officiis autem?</p>

                                    <div className="icon-holder">
                                        {/*<i className="bi-book"></i>*/}
                                        <Icon.Book size={25} />
                                    </div>
                                </List>
                            </Ul>
                        </div>
                    </Col>
                    <Col lg={12} className="text-center mt-5">
                        <p className="text-white">
                            Want to learn more?
                            <Button btnLinkActive={true} btnLinkClasses="btn custom-btn custom-border-btn ms-3" text='Check out Youtube' />
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
