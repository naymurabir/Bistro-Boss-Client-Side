import axios from "axios";
import { useEffect } from "react";


const useInterceptors = () => {

    const instance = axios.create({
        baseURL: 'http://localhost:5000',
    })

    useEffect(() => {
        instance.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        instance.interceptors.response.use(function (response) {
            return response;
        }, async function (error) {

            return Promise.reject(error);
        });
    }, [instance.interceptors.request, instance.interceptors.response])

    return instance;
};

export default useInterceptors;