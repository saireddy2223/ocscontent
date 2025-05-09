import { Link } from 'react-router-dom';
import zerotrust2 from '../assets/zerotrust2.png';
import FeaturesGrid from '../components/FeaturesGrid';
import Flags from '../components/Flags';
import NewMessageSection from '../components/NewMessageSection';
import TechAndReach from '../components/TechReach';
import AboutUs from './About';
import ContactUs from './Contact';


const Home = () => {
  return (
    <section className="bg-[#f5f6f0] pt-16 pb-20 sm:pt-20">
      <div className="w-[90%] lg:w-[85%] xl:w-[80%] max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-[50%] space-y-6 text-center sm:text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] font-bold leading-tight text-gray-900">
            Secure Your Data with the <span className="text-green-600">Invisible Cloud</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            <span className="text-green-600 font-bold">Zero Knowledge</span>,
            <span className="text-green-600 font-bold"> Quantum-Safe</span>,
            <span className="text-green-600 font-bold"> Immutable</span> Storage Platform.
          </p>
          <p className="text-base sm:text-2xl font-bold text-gray-700">Our service is Lockin Free </p>
          {/* <a href='https://www.onecloudstorage.com/login_AMG.php'>
            <button className="bg-[#59A033] hover:bg-[#4a8a2a] text-white px-6 py-3 rounded-full font-semibold hover:text-white cursor-pointer">
              Download Our Zero trust, Invisible cross cloud gateway
            </button>
          </a> */}
           <Link to='/enquiry'>
            <button className="bg-[#59A033] hover:bg-[#4a8a2a] text-white px-6 py-3 rounded-full font-semibold hover:text-white cursor-pointer">
              Download Our Zero trust, Invisible cross cloud gateway
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[50%] md:max-w-lg xl:max-w-xl">
          <img
            src={zerotrust2}
            alt="Invisible Cloud Illustration"
            className="w-full h-auto max-h-[500px] object-contain"
          />
        </div>
      </div>
      <div>
      <NewMessageSection/>
      </div>
      
      <div>
        <Flags />
      </div>
      <div>
        <FeaturesGrid />
      </div>
      <div>
        <TechAndReach />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <ContactUs />
      </div>
    </section>

  );
};

export default Home;
