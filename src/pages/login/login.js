import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { isLogin, login } from '../../utils/auth';
import BackGroundImage from '../../assets/images/background.png';
import Logo from '../../assets/images/logo.png';

import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const [email, setEmail] = useState('worean@naver.com');
    const [password, setPassword] = useState('1234');
    const [isSave, setIsSave] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSave) {
            localStorage.setItem('email', email);
            //localStorage.setItem('password', password);
        }
        // UI를 로딩중 상태로 변경한다.
        setLoading(true);

        // 로그인을 동작한다.
        var ret = await login(email, password);
        console.log(ret);
        setLoading(false);

        // 로그인 성공시 메인 페이지로 이동한다.
        if(isLogin()) {
            navigate(-1);
        }
    };

    return (
        <div className='flex flex-col justify-center align-middle 
        items-center h-screen w-screen bg-cover bg-no-repeat'
            style={{ backgroundImage: `url(${BackGroundImage})` }}>
            <Form className='shadow bg-white p-4 rounded w-96 max-w-90%'
                onSubmit={handleSubmit}>
                {/* 로고 */}
                <img className='img-thumbnail w-16 h-16 mx-auto d-block mb-2' src={Logo} alt='logo' />
                <div className='text-center text-2xl font-bold mb-4'>Login</div>
                {/* 이메일 */}
                <Form.Group
                    className='mb-2'
                    controlId="FormLoginEmail">
                    <Form.Label className='mb-2'>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                {/* 비밀번호 */}
                <Form.Group
                    className='mb-2'
                    controlId="FormLoginPassword">
                    <Form.Label className='mb-2'>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                {/* 아이디 저장 */}
                <Form.Group
                    className='mb-2'
                    controlId="formBasicCheckbox"
                >
                    <Form.Check type="checkbox" label="저장 하시겠습니까?"
                        value={isSave}
                        onChange={(e) => setIsSave(e.target.checked)}
                    />
                </Form.Group>

                {/* 로그인 버튼 */}
                {loading ?
                    (<Button className='w-100 mb-2'
                        variant="primary" type='submit' disabled>
                        Loading...
                    </Button>) :
                    (<Button className='w-100 mb-2'
                        variant="primary" type='submit'>
                        Login
                    </Button>)
                }

                {/* 회원가입 */}
                <div className='flex justify-between'>
                    <a href='/register'>회원가입</a>
                    <a href='/'>비밀번호 찾기</a>
                </div>

            </Form>
        </div>
    );
};

export default LoginPage;