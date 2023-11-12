
import featuredImg from '../../assets/home/featured.jpg'
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

import './FeaturedItems.css'

const FeaturedItems = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20 featured-item py-5'>

            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}>
            </SectionTitle>

            <div className='flex flex-col lg:flex-row justify-center items-center pb-8 md:pb-10 lg:pb-14 pt-5 md:pt8 lg:pt-10 px-8 md:px-12 lg:px-24 gap-5 text-black'>

                <div>
                    <img src={featuredImg} alt="" />
                </div>

                <div>
                    <h4 className='text-sm font-semibold'>November 15, 2023</h4>
                    <h2 className='text-xl font-semibold'>WHERE CAN I GET SOME?</h2>
                    <p className='text-sm font-semibold'>Where can i can some food like this? Just visit our website and just order us. We will make delivery to you. </p>
                </div>
            </div>

        </div>
    );
};

export default FeaturedItems;



