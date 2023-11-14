import axios from "axios";
import { useEffect } from "react";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
})

const useInterceptors = () => {

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
    }, [])

    return instance;
};

export default useInterceptors;