
export default function PhoneOrEmail({title, link=[':']}) {
    
    let linkFor = link.split(':')

    return (
        <p className="d-flex align-items-center mb-1">
            <span className="me-2">{title}</span>

            <a href={`${linkFor[0]}: ${linkFor[1]}`} className="site-footer-link">
                {linkFor[1]}
            </a>
        </p>
    )
}
