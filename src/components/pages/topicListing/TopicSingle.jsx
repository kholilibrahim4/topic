
import Button from '../../Button'

export default function TopicSingle({ title, description, badgeCount, badgeType, topicImg }) {
    return (
        <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
            <div className="d-flex">
                <img src={topicImg} className="custom-block-image img-fluid" alt="" />

                <div className="custom-block-topics-listing-info d-flex">
                    <div>
                        <h5 className="mb-2">{title}</h5>

                        <p className="mb-0">{description}</p>

                        <Button text='Learn More' btnLinkClasses='btn custom-btn mt-3 mt-lg-4' btnLinkActive={true} />
                    </div>

                    <span className={`badge ${badgeType} rounded-pill ms-auto`}>{badgeCount}</span>
                </div>
            </div>
        </div>
    )
}
