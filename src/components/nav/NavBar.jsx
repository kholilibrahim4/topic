import { Col, Container, Row } from 'react-bootstrap'
import styles from './Nav.module.css'
import { useState, useContext } from 'react'
import { DataContext } from '../contextApi/DataContext'


export default function NavBar() {
    const { navBar } = useContext(DataContext)

    const [menuActive, setMenuActive] = useState('home')
    const [sticky, setSticky] = useState(false)
    function stickyFun() {
        if (window.scrollY > window.innerHeight - 86) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    window.addEventListener('scroll', stickyFun)


    // Button toggle
    const [toggle, setToggle] = useState(false)
    const handldToggle = () => {
        setToggle(!toggle)
    }

    // menu active
    const handelClickActive = (item) => {
        setMenuActive(item)
        
    }


    return (
        <nav className={sticky ? `${styles.navActive}` : ''}>

            <Container>
                <Row className={styles.wdInherit}>
                    <Col md={2} sm={5}>
                        <div className={styles.logo}>
                            <h1><a href="#home" className="smoothScroll">nayan</a></h1>
                            {/* <!--<img src="images/logo.png" alt="">--> */}
                        </div>
                    </Col>

                    <div className={toggle ? `${styles.responsive} ${styles.buttonTigger}` : `${styles.responsive}`} onClick={handldToggle}>
                        {/* <!--<i data-icon="m" className="icon"></i>--> */}
                        <span className={styles.resIcon}></span>
                    </div>
                    <Col md={10} sm={12} >
                        <ul className={toggle ? `${styles.navMenu} ${styles.mobileNavActive}` : `${styles.navMenu}`}>

                            {
                                navBar.map((item, id) => {
                                    return (
                                        <li onClick={() => handelClickActive(item)} key={id} className={menuActive == item ? `${styles.active}`:''}>
                                            <a href={`#${item}`} className="smoothScroll" onClick={handldToggle}>{item}</a>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </Col>
                </Row>
            </Container>

        </nav>
    )
}
