import React from 'react'
import SectionTitle from '../../SectionTitle'
import NavTab from './NavTab'
import TabContent from './TabContent'
import { Container, Row } from 'react-bootstrap'

export default function Explore() {
    return (
        <section className="explore-section section-padding" id="section_2">
            <Container>
                <Row>
                    <SectionTitle title="Browse Topics" className="text-center" />
                    <NavTab />
                    <TabContent />
                </Row>
            </Container>
        </section>
    )
}
