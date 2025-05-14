import { Col } from 'react-bootstrap'

export default function FooterLink() {
    return (
        <Col lg={3} md={4}>
            <h6 className="site-footer-title mb-3">Resources</h6>

            <ul className="site-footer-links">
                <li className="site-footer-link-item">
                    <a href="#section_1" className="site-footer-link">Home</a>
                </li>

                <li className="site-footer-link-item">
                    <a href="#section_3" className="site-footer-link">How it works</a>
                </li>

                <li className="site-footer-link-item">
                    <a href="#section_4" className="site-footer-link">FAQs</a>
                </li>

                <li className="site-footer-link-item">
                    <a href="#section_5" className="site-footer-link">Contact</a>
                </li>
            </ul>
        </Col>
    )
}
