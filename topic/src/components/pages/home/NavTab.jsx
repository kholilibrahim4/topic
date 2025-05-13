import React from 'react'
import Button from '../../Button'
import { Container, Row } from 'react-bootstrap'



export default function NavTab() {
    return (
        <Container fluid>
            <Row>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        {/* <button className="" id="design-tab" data-bs-toggle="tab" data-bs-target="#design-tab-pane" type="button" role="tab" aria-controls="design-tab-pane" aria-selected="true">Design</button> */}
                        <Button
                            btnLinkClasses="nav-link active"
                            id="design-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#design-tab-pane"
                            type="button" role="tab"
                            aria-controls="design-tab-pane"
                            aria-selected="true"
                            text="Design" />
                    </li>

                    <li className="nav-item" role="presentation">
                        {/* <button className="nav-link" id="marketing-tab" data-bs-toggle="tab" data-bs-target="#marketing-tab-pane" type="button" role="tab" aria-controls="marketing-tab-pane" aria-selected="false">Marketing</button> */}
                        <Button
                            btnLinkClasses="nav-link"
                            id="marketing-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#marketing-tab-pane"
                            type="button" role="tab"
                            aria-controls="marketing-tab-pane"
                            aria-selected="false"
                            text="Marketing" />
                    </li>

                    <li className="nav-item" role="presentation">
                        {/* <button className="nav-link" id="finance-tab" data-bs-toggle="tab" data-bs-target="#finance-tab-pane" type="button" role="tab" aria-controls="finance-tab-pane" aria-selected="false">Finance</button> */}
                        <Button
                            btnLinkClasses="nav-link"
                            id="finance-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#finance-tab-pane"
                            type="button" role="tab"
                            aria-controls="finance-tab-pane"
                            aria-selected="false"
                            text="Finance" />
                    </li>

                    <li className="nav-item" role="presentation">
                        {/* <button className="nav-link" id="music-tab" data-bs-toggle="tab" data-bs-target="#music-tab-pane" type="button" role="tab" aria-controls="music-tab-pane" aria-selected="false">Music</button> */}
                        <Button
                            btnLinkClasses="nav-link"
                            id="music-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#music-tab-pane"
                            type="button" role="tab"
                            aria-controls="music-tab-pane"
                            aria-selected="false"
                            text="Music" />
                    </li>

                    <li className="nav-item" role="presentation">
                        {/* <button className="nav-link" id="education-tab" data-bs-toggle="tab" data-bs-target="#education-tab-pane" type="button" role="tab" aria-controls="education-tab-pane" aria-selected="false">Education</button> */}
                        <Button
                            btnLinkClasses="nav-link"
                            id="education-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#education-tab-pane"
                            type="button" role="tab"
                            aria-controls="education-tab-pane"
                            aria-selected="false"
                            text="Education" />
                    </li>
                </ul>
            </Row>
        </Container>
    )
}
