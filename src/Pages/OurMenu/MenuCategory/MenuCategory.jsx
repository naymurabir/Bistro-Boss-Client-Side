
const MenuCategory = ({ menuCoverImg, menuTitle, menuDescription }) => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20'>
                <div className="hero h-[200px] md:h-[400px] lg:h-[400px] my-10" style={{ backgroundImage: `url(${menuCoverImg})` }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hidden md:block text-center bg-black text-white bg-opacity-60 px-6 py-6 rounded">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl font-bold">{menuTitle}</h1>
                            <p className="mb-5"> {menuDescription} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;