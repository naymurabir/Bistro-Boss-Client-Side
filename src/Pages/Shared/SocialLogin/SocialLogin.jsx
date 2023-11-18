import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import googleImg from '../../../assets/login/google 1.png'
import Swal from "sweetalert2";

const SocialLogin = () => {

    const { googleLogin } = useAuth()

    const axiosPublic = useAxiosPublic()

    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);

                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
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

            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin}>  <img src={googleImg} alt="" /></button>
        </div>
    );
};

export default SocialLogin;