import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSave, setIsSave] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('isSave:', isSave);
    };

    return (
        <Container className="flex-col items-center justify-center">
            <Row className="justify-content-md-center justify-items-center">
                <Col md={6}>
                    <h2 className="text-center">Login</h2>
                    <Form onSubmit={handleSubmit}>

                        {/* 이메일 */}
                        <Form.Group controlId="FormLoginEmail">
                            <Form.Label className='m-1'>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        {/* 비밀번호 */}
                        <Form.Group
                            className='mt-3'
                            controlId="FormLoginPassword">
                            <Form.Label className='m-1'>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        {/* 아이디 저장 */}
                        <Form.Group
                            className='mt-2 ml-1'
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check type="checkbox" label="저장 하시겠습니까?"
                            value={isSave}
                            onChange={(e) => setIsSave(e.target.checked)}
                             />
                        </Form.Group>
                        
                        {/* 로그인 버튼 */}
                        <Button className='mt-3'
                            variant="primary" type="submit" block>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;