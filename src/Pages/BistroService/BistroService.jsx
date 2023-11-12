import chefService from '../../assets/home/chef-service.jpg'


const BistroService = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20'>
            <div className="hero h-[200px] md:h-[350px] lg:h-[400px] my-10" style={{ backgroundImage: `url(${chefService})` }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hidden md:block text-center bg-white px-6 py-6 rounded">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Bistro Boss</h1>
                        <p className="mb-5">Indulge in a culinary journey like no other at Bistro Boss, where passion meets flavor. Immerse yourself in a world of delectable delights, meticulously crafted to tantalize your taste buds.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BistroService;