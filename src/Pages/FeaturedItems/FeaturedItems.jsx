
import featuredImg from '../../assets/home/featured.jpg'
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

import './FeaturedItems.css'

const FeaturedItems = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20 featured-item bg-fixed my-5 py-2'>

            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}>
            </SectionTitle>

            <div className='flex flex-col lg:flex-row justify-center items-center pb-6 md:pb-8 lg:pb-12 pt-2 md:pt-6 lg:pt-16 px-8 md:px-12 lg:px-24 gap-5 bg-black bg-opacity-10 text-[#D99904]'>

                <div className='lg:w-[50%]'>
                    <img src={featuredImg} alt="" />
                </div>

                <div className='lg:w-[50%]'>
                    <h4 className='text-sm font-semibold'>November 15, 2023</h4>
                    <h2 className='text-xl font-semibold'>WHERE CAN I GET SOME?</h2>
                    <p className='text-sm font-semibold'>Where can i can some food like this? Just visit our website and just order us. We will make delivery to you. </p>

                    <button className='btn btn-outline border-0 border-b-4 text-[#D99904]'>Read More</button>
                </div>
            </div>

        </div>
    );
};

export default FeaturedItems;



