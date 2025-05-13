import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default function Logo(){
    return(
         <Link className="navbar-brand" to="/">
                <Icon.Back />

                <span>Topic</span>
         </Link>
        )
}