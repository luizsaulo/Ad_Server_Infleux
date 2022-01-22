import React, { useState } from 'react';
import LoginModal from '../../Components/LoginModal/LoginModal';
import RegisterModal from '../../Components/RegisterModal/RegisterModal';

function Modal() {
    const [isLogin, setIsLogin] = useState(true)

    function setLoginForm() {
        setIsLogin(true)
    }

    function setRegisterForm() {
        setIsLogin(false)
    }

    return (
        <div className='backdrop'>
           {isLogin ? <LoginModal setRegisterForm={setRegisterForm} /> : <RegisterModal setLoginForm={setLoginForm} />}            
        </div>
    )
}

export default Modal