import { Col, Pagination } from 'react-bootstrap'

export default function PaginationComp() {
    let active = 1
    let items = []

    for (let number = 1; number <= 5; number++) {
        items.push(

            <Pagination.Item key={number} active={active === number}>
                {number}
            </Pagination.Item>
        )
    }



    return (
        <Col lg={12}>
            <Pagination className='justify-content-center mb-0'>
                <Pagination.First>
                    Prev
                </Pagination.First>

                {items}
                
                <Pagination.Last>
                    Next
                </Pagination.Last>
            </Pagination>
        </Col>
    )
}
