import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import InputField from './InputField'
import TextareaField from './TextareaField'
import Button from '../../Button'

export default function FormComp() {
    const [form, setForm] = useState({
        name: '',
        email:'',
        subject:'',
        message: ''
    })

    const handelChange = (e) =>{
        const {name, value} = e.target
        setForm((prev)=>{
            return{...prev, [name]: value}
        })
    }

    const submitForm = (e) =>{
        const {name,email,subject,message} = form
        e.preventDefault()
        if(name && email && subject && message){
        console.log(form)
        }else{
            // alert('Please field the data')
            console.log(e.target.name)
        }
    }

    return (
        <Col lg={6}>
            <Form onSubmit={submitForm} action="#" method="post" className="custom-form contact-form" role="form">
                <Row>
                    <Col lg={6} md={6}>
                        <div className='form-floating'>
                            <InputField
                                onChange={handelChange}
                                htmlFor='floatingInput'
                                labelText='Name'
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Name" />
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className='form-floating'>
                            <InputField
                            onChange={handelChange}
                                htmlFor='floatingInput'
                                labelText='Email address'
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                pattern="[^ @]*@[^ @]*"
                                placeholder="Email address" />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className='form-floating'>
                            <InputField
                            onChange={handelChange}
                                htmlFor='floatingInput'
                                labelText='Subject'
                                type="text"
                                name="subject"
                                id="name"
                                className="form-control"
                                placeholder="Subject" />
                        </div>

                        <div className='form-floating'>
                            <TextareaField
                            onChange={handelChange}
                                className="form-control"
                                id="message"
                                name="message"
                                placeholder="Tell me about the project"
                                htmlFor='floatingTextarea'
                                labelText='Tell me about the project' />
                        </div>
                    </Col>
                    <Col lg={4} className='ms-auto'>
                        <Button type='submit' text='Submit' btnLinkClasses='form-control' />
                    </Col>
                    
                </Row>
            </Form>
        </Col>
    )
}
