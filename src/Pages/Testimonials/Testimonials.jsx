import SectionTitle from "../Shared/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Testimonials.css';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useInterceptors from "../../Hooks/useInterceptors";


const Testimonials = () => {

    const axiosInstance = useInterceptors()

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getReviews = async () => {
            const { data } = await axiosInstance.get('/reviews')
            setReviews(data)
        }
        getReviews()
    }, [axiosInstance])


    return (
        <section className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">
            <SectionTitle
                subHeading={"---What Our Clients Say---"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                    <div >
                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <div className="px-10 md:px-16 lg:px-20 flex flex-col items-center my-8 lg:my-4">

                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />

                                    <p className="text-black text-sm lg:py-5">{review.details}</p>
                                    <h2 className="text-[#9e730f] font-bold">{review.name}</h2>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;