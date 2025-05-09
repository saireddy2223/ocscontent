// import indiaFlag from '../assets/indiaFlag.jpg'
// import usFlag from '../assets/usFlag.webp'
// import ukFlag from '../assets/ukFlag.webp'
// import { useNavigate } from 'react-router-dom'

// const Flags = () => {
//     const navigate = useNavigate();
//     function handleRedirect(country) {
//         navigate(`/signin?country=${encodeURIComponent(country)}`)
//     }
//     return (
//         <>
//             <div className='w-[90%] lg:w-[85%] xl:w-[80%] max-w-[1400px] mx-auto' >
//                 <h2 className='text-4xl mx-auto text-center mt-10 font-semibold'>Select your country to <span className='text-green-600 font-bold'>Login</span></h2>
//                 <div className='flex flex-col sm:flex-row  justify-around mt-10'>
//                     <img src={ukFlag} alt="UK Flag" className='sm:w-[30%] mb-10 sm:mb-0 cursor-pointer' onClick={() => handleRedirect('UK')} />
//                     <img src={indiaFlag} alt="India Flag" className='sm:w-[30%] mb-10 sm:mb-0 cursor-pointer' onClick={() => handleRedirect('India')} />
//                     <img src={usFlag} alt="US Flag" className='sm:w-[30%] mb-10 sm:mb-0 cursor-pointer' onClick={() => handleRedirect('US')} />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Flags;



import indiaFlag from '../assets/indiaFlag.jpg';
import usFlag from '../assets/usFlag.webp';
import ukFlag from '../assets/ukFlag.webp';
import { useNavigate } from 'react-router-dom';

const Flags = () => {
    const navigate = useNavigate();

    const handleRedirect = (country) => {
        navigate(`/signin?country=${encodeURIComponent(country)}`);
    };

    return (
        <div className='w-[90%] lg:w-[85%] xl:w-[80%] max-w-[1400px] mx-auto py-10'>
            <h2 className='text-4xl sm:text-5xl text-center font-bold mt-10 mb-6'>
                <span className='text-gray-800'>Select your country to</span>{' '}
                <span className='text-green-600 '>Login</span>
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
                <div
                    onClick={() => handleRedirect('UK')}
                    className='transition-transform hover:scale-105 cursor-pointer shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl'
                >
                    <img src={ukFlag} alt='UK Flag' className='w-full h-48 object-cover' />
                    <p className='text-center py-2 font-medium'>United Kingdom</p>
                </div>

                <div
                    onClick={() => handleRedirect('India')}
                    className='transition-transform hover:scale-105 cursor-pointer shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl'
                >
                    <img src={indiaFlag} alt='India Flag' className='w-full h-48 object-cover' />
                    <p className='text-center py-2 font-medium'>India</p>
                </div>

                <div
                    onClick={() => handleRedirect('US')}
                    className='transition-transform hover:scale-105 cursor-pointer shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl'
                >
                    <img src={usFlag} alt='US Flag' className='w-full h-48 object-cover' />
                    <p className='text-center py-2 font-medium'>United States</p>
                </div>
            </div>
        </div>
    );
};

export default Flags;
