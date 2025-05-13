import {Col} from 'react-bootstrap'
import Button from './Button'
import Ul from './Ul'
import List from './List'




export default function Language(){
    return(
        <Col lg={3} md={4} className="mt-4 mt-lg-0 ms-auto">
                        <div className="dropdown">
                            <Button text='English' type='button' btnLinkClasses='btn btn-secondary dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false" />
                        
                            {/*<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            English</button>*/}

                            <Ul className="dropdown-menu">
                                <List><Button text='Thai' btnLinkClasses="dropdown-item" type="button" /></List>

                                <List><Button text='Myanmar' btnLinkClasses="dropdown-item" type="button" /></List>

                                <List><Button text='Arabic' btnLinkClasses="dropdown-item" type="button" /></List>
                            </Ul>
                            
                        </div>

                        <p className="copyright-text mt-lg-5 mt-4">Copyright © 2048 Topic Listing Center. All rights reserved.
                        <br/><br/>Design: <a rel="nofollow" href="https://templatemo.com" target="_blank">TemplateMo</a></p>
                        
                    </Col>
        )
}