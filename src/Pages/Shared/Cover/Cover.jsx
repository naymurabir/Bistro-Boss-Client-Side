import { Parallax } from 'react-parallax';


const Cover = ({ img, title, description }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[200px] md:h-[400px] lg:h-[450px]">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hidden md:block text-center bg-black text-white bg-opacity-60 px-32 py-12 rounded">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title} </h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>



    );
};

export default Cover;