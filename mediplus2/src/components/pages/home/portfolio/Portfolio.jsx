import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../../../sectionTitle/SectionTitle'
import { AllDataContext } from '../../../contextApi/DataContext'
import PortfolioItem from './PortfolioItem'
import styles from './Portfolio.module.css'


export default function Portfolio() {
    const { portfolio: { secTitle, secDesc, portfolioItem } } = useContext(AllDataContext)
    return (
        <section className={`${styles.portfolio} section`} >
            <Container>
                <Row>
                    <SectionTitle
                        title={secTitle}
                        desc={secDesc}
                    />
                </Row>
            </Container>
            <Container fluid>
                <Row class="row">
                    <Col lg={12} md={12} >
                        <div className="owl-carousel portfolio-slider">
                            {portfolioItem.map((item) => {
                                return (
                                    <PortfolioItem
                                        key={Math.random()}
                                        img={item.img}
                                        btnText={item.btnText}
                                        link={item.link}
                                    />
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
