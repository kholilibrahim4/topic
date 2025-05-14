import * as Icon from 'react-bootstrap-icons'
import Ul from './Ul'
import List from './List'
import Button from './Button'



export default function SocilaMedia() {
    return (
        <div className="social-share d-flex">
            <p className="text-white me-4">Share:</p>

            <Ul className="social-icon">
                <List className="social-icon-item">
                    <a href="#" className="social-icon-link">
                    <Icon.Twitter />
                    </a>
                    
                </List>

                <List className="social-icon-item">
                    <a href="#" className="social-icon-link">
                    <Icon.Facebook/>
                    </a>
                </List>

                <List className="social-icon-item">
                    <a href="#" className="social-icon-link">
                    <Icon.Pinterest />
                    </a>
                </List>
            </Ul>

            <Button btnLinkActive={true} btnLinkClasses="custom-icon ms-auto">
                <Icon.Bookmark />
            </Button>
        </div>
    )
}
