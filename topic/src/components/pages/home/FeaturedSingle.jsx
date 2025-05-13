import { Col } from 'react-bootstrap'

export default function FeaturedSingle({title,description,badgeCount,featuredImg,...spread}) {

    return (
        <Col {...spread} className="mb-4 mb-lg-0">
            <div className="custom-block bg-white shadow-lg">
                <a href="topics-detail.html">
                    <div className="d-flex">
                        <div>
                            <h5 className="mb-2">{title}</h5>

                            <p className="mb-0">{description}</p>
                        </div>

                        <span className="badge bg-design rounded-pill ms-auto">{badgeCount}</span>
                    </div>

                    <img src={featuredImg} className="custom-block-image img-fluid" alt="" />
                </a>
            </div>
        </Col>
    )
}
