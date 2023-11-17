import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Category.css';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'

import { Pagination } from 'swiper/modules';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section className='max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20 '>

            <SectionTitle
                subHeading={"---From 11:00am to 10:00pm---"}
                heading={"ORDER ONLINE"}>
            </SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-sm md:text-2xl shadow-md  text-center -mt-5 md:-mt-16 text-white'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-sm md:text-2xl shadow-md  text-center -mt-5 md:-mt-16 text-white'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-sm md:text-2xl shadow-md  text-center -mt-5 md:-mt-16 text-white'>Soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-sm md:text-2xl shadow-md  text-center -mt-5 md:-mt-16 text-white'>Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;