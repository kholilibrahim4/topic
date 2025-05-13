import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AllDataContext } from '../../../contextApi/DataContext'
import ClientItem from './ClientItem'
import styles from './Client.module.css'


export default function Clients() {
    const { clients } = useContext(AllDataContext)
    return (
        <div className={`${styles.clients} overlay`}>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className="owl-carousel clientSlider">
                            {clients.map((img) => {
                                return (
                                    <ClientItem
                                        key={Math.random()}
                                        img={img}
                                    />
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
