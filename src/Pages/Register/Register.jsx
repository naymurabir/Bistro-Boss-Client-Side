import { Link } from "react-router-dom";
import loginImg from '../../assets/login/login-register.png'


const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        const termsAccepted = form.get('terms')
        console.log(name, photo, email, password, termsAccepted);
    }

    return (
        <div className='max-w-screen-xl mx-auto px-2 md:px-12 lg:px-20'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col md:flex-row lg:flex-row gap-10 lg:gap-20">
                    <div className="text-center lg:text-left lg:w-[50%]">
                        <img className='w-[200px] md:w-[400px]' src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0  max-w-sm  border border-gray-500 lg:w-[50%]">
                        <form onSubmit={handleRegister}>
                            <h2 className='text-2xl font-semibold text-center mt-5'>Sign Up</h2>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Name</span>
                                    </label>
                                    <input
                                        name='name'
                                        type="text"
                                        placeholder="Name..." className="input input-bordered focus:outline-0" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Photo url</span>
                                    </label>
                                    <input
                                        name='photo'
                                        type="text"
                                        placeholder="Photo url..." className="input input-bordered focus:outline-0" />
                                </div>
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

                                <div className='flex gap-2 items-center  font-semibold'>
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        id="" />
                                    <label className='text-xs text-purple-900'>Accept terms and conditions</label>
                                </div>

                                <div className="form-control">
                                    <button className='text-white font-semibold bg-[#f3411d] px-3 py-2 rounded'>Sign Up</button>
                                </div>

                                <div className='text-center mt-2'>
                                    <h2 className='text-sm'>Already have an account? <Link className='text-[#f3411d] font-semibold' to="/login">Login</Link> </h2>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;