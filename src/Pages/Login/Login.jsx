import loginImg from '../../assets/login/login-register.png'
import fbImg from '../../assets/login/fb.png'
import googleImg from '../../assets/login/google 1.png'
import { Link } from 'react-router-dom';

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';


const Login = () => {

    const [disabled, setDisabled] = useState(true)

    const captchaRef = useRef(null)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
        }
    }

    return (
        <div className='max-w-screen-xl mx-auto px-2 md:px-12 lg:px-20'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col md:flex-row lg:flex-row gap-10 lg:gap-20">
                    <div className="text-center lg:text-left lg:w-[50%]">
                        <img className='w-[200px] md:w-[450px]' src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0  max-w-sm  border border-gray-500 lg:w-[50%]">
                        <form onSubmit={handleLogin}>
                            <h2 className='text-2xl font-semibold text-center mt-5'>Log In</h2>
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input
                                        name='email'
                                        type="email"
                                        placeholder="Email..." className="input input-bordered focus:outline-0" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input
                                        name='password'
                                        type="password" placeholder="password" className="input input-bordered focus:outline-0" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input
                                        ref={captchaRef}
                                        type="text"
                                        placeholder="Type the captcha"
                                        className="input input-bordered focus:outline-0"
                                        required />
                                    <button type="button" onClick={handleValidateCaptcha} className="btn btn-xs btn-outline mt-2">Validate</button>
                                </div>
                                <div className="form-control">
                                    {/* <button disabled={disabled} className="bg-gray-100 px-2 py-2 rounded text-[#BB8506] font-semibold border-b-2 border-[#BB8506] mb-2 hover:bg-slate-800 hover:text-[#BB8506]">Login</button> */}
                                    <button disabled={disabled} className='btn btn-success'>Login</button>
                                </div>

                                <div className='flex justify-center'>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div>
                                    <h3 className='text-xs text-center font-semibold'>Or sign in with</h3>
                                    <div className='flex justify-center items-center gap-4 mt-3'>
                                        <button> <img src={fbImg} alt="" /> </button>
                                        <button >  <img src={googleImg} alt="" /></button>
                                    </div>
                                </div>

                                <div className='text-center'>
                                    <h2 className='text-sm'>Do not have an account? <Link className='text-[#f3411d] font-semibold' to="/register">Sign Up</Link> </h2>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;