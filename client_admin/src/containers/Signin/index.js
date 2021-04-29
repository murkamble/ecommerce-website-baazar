import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
import { login } from "../../actions";
import { useDispatch } from "react-redux";

const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault()
        const user = { email, password }
        dispatch(login(user))
    }

    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userLogin}>
                            <Input
                                label="Email Address"
                                placeholder="Email Address"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Signin;