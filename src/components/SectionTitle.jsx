import {Container, Row, Col} from 'react-bootstrap'

export default function SectionTitle({title, headingClasses,  ...spread}) {
    return (
        <Container>
            <Row>
                <Col {...spread}>
                    <h2 className={`${headingClasses} mb-4`}>{title}</h2>
                </Col>

            </Row>
        </Container>
    )
}
