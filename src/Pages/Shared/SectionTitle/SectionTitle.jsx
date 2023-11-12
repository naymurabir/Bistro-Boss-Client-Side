
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center my-10'>
            <p className='text-sm text-[#9e730f]'>{subHeading}</p>
            <hr className='w-[250px] mx-auto my-2' />
            <h2 className='text-xl font-semibold'>{heading}</h2>
            <hr className='w-[250px] mx-auto my-2' />
        </div>
    );
};

export default SectionTitle;