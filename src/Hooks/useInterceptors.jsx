import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useInterceptors = () => {

    const { logOut } = useAuth() || {}
    const navigate = useNavigate()

    useEffect(() => {
        instance.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        instance.interceptors.response.use(function (response) {
            return response;
        }, async function (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                await logOut()
                console.log('log out')
                navigate('/login')
            }
            return Promise.reject(error);
        });
    }, [logOut, navigate])

    return instance;
};

export default useInterceptors;