import axios from "axios";
import { useEffect } from "react";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosPublic = () => {
    useEffect(() => {
        axiosPublic.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        axiosPublic.interceptors.response.use(function (response) {
            return response;
        }, async function (error) {

            return Promise.reject(error);
        });
    }, [])

    return axiosPublic
};

export default useAxiosPublic;