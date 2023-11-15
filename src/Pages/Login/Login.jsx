import loginImg from '../../assets/login/login-register.png'
import fbImg from '../../assets/login/fb.png'
import googleImg from '../../assets/login/google 1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';


const Login = () => {

    const { signInUser, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const [disabled, setDisabled] = useState(true)

    const [captcha, setCaptcha] = useState('')

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    useEffect(() => {
        if (captcha.length === 6) {
            if (validateCaptcha(captcha) == true) {
                setDisabled(false)
            }

            else {
                setDisabled(true)
            }
        } else {
            setDisabled(true)
        }
    }, [captcha])


    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        // Call signInUser and pass email and password 
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                navigate(location?.state ? location?.state : '/')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User logged in successfully.',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
                e.target.reset()
            })
            .catch(error => {
                console.log("Error:", error.message);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Your email / password is invalid.",
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(location?.state ? location?.state : '/')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User logged in successfully.',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
            .then(error => {
                console.log("Error:", error.message);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Your google account is invalid.",
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
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
                                        onChange={(event) => setCaptcha(event.target.value)}
                                        name='captcha'
                                        type="text"
                                        placeholder="Type the captcha"
                                        className="input input-bordered focus:outline-0"
                                        required />
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
                                        <button onClick={handleGoogleLogin}>  <img src={googleImg} alt="" /></button>
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