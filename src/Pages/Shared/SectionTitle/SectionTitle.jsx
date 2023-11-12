
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center my-5'>
            <p className='text-sm text-[#D99904]'>{subHeading}</p>
            <hr className='w-[200px] mx-auto my-2' />
            <h2 className='text-xl font-semibold'>{heading}</h2>
            <hr className='w-[200px] mx-auto my-2' />
        </div>
    );
};

export default SectionTitle;