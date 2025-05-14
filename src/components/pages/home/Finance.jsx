import React from 'react'
import Button from '../../Button'
import { Col } from 'react-bootstrap'


export default function Finance({ title, description, badgeCount, featuredImg, children,...spread }) {
    return (
        <Col lg={6} {...spread}>
            <div className="custom-block custom-block-overlay">
                <div className="d-flex flex-column h-100">
                    <img src={featuredImg} className="custom-block-image img-fluid" alt="" />

                    <div className="custom-block-overlay-text d-flex">
                        <div>
                            <h5 className="text-white mb-2">{title}</h5>

                            <p className="text-white">{description}</p>

                            {/* <a href="topics-detail.html" className="btn custom-btn mt-2 mt-lg-3">Learn More</a> */}
                            <Button
                                btnLinkClasses='btn custom-btn mt-2 mt-lg-3'
                                btnLinkActive={true}
                                text="Learn More" />
                        </div>

                        <span className="badge bg-finance rounded-pill ms-auto">{badgeCount}</span>
                    </div>

                    {children}

                    <div className="section-overlay"></div>
                </div>
            </div>
        </Col>
    )
}
