import React from "react";

const TechAndReach = () => {
  return (
    <section className="bg-[#0A1B33] py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-12 text-white text-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Technology is powered by the market pioneering invention on distributed, virtual storage cloud, granted US patent, <span className="text-[#59A033]">US9128626</span>.
          </h3>
          <hr className="border-t border-gray-600 my-6 mx-auto w-2/3" />
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold">
            We are operating in limited countries due to data residency reasons<br />
            and will soon be available in <span className="text-[#59A033]">your country</span>!
          </h3>
          <hr className="border-t border-gray-600 my-6 mx-auto w-2/3" />
        </div>
      </div>
    </section>
  );
};

export default TechAndReach;