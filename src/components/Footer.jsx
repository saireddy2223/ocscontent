import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f4f8fd] text-gray-700 py-6 px-4">
      <div className="max-w-[1400px] w-[95%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-sm">
        {/* Contact Info + Address */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center gap-6 justify-center">
            {/* Phone number : */}
            {/* <div className="flex items-center gap-2">
              <Phone className="text-green-600 h-4 w-4" />
              <span className="font-semibold text-gray-900">+44 7786 495230</span>
            </div> */}
            <div className="flex items-center gap-2">
              <Mail className="text-green-600 h-4 w-4" />
              <span className="font-semibold text-gray-900">support@neridio.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-green-600 h-4 w-4" />
            <span className="text-gray-800 font-medium">
              Neridio Systems Ltd, Tramshed Tech Innovation Station,
              Old station building, Queensway, Newport, Wales, NP20 4AX
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 justify-center flex-wrap">
          <a
            href="https://www.linkedin.com/company/neridio-systems-ltd/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="bg-white rounded-full p-1 h-7 w-7 shadow" />
          </a>
          <a
            href="https://www.youtube.com/@neridiosystems7840"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="bg-white rounded-full p-1 h-7 w-7 shadow" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-center">
          © 2025 OneCloudStorage. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;