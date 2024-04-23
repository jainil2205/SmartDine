import banner from "../assets/banner.jpg";

import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Section 1 */}
      <div className="relative isolate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src={banner}
            alt=""
            className="absolute inset-0 brightness-50 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          <div className="mx-auto max-w-2xl lg:mx-5">
            <h2 className="text-4xl font-bold tracking-tight text-[#f4ce14] sm:text-6xl">
              Smart Dine
            </h2>
            <p className="text-white text-3xl sm:text-4xl">Gandhinagar</p>
            <p className="text-white mt-6 text-xl leading-8">
              We are a family-owned Gujarati Tradition based restaurant, focused on
              traditional recipes served with love.
            </p>
          </div>
          <div className="mx-auto mt-20 max-w-4xl lg:mx-5 lg:max-w-none">
            <NavLink
              to="/reservations"
              className="rounded-md duration-200 delay-100 bg-[#f4ce14] text-[#495e57] px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-black hover:text-white"
            >
              Book a table
            </NavLink>
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default Home;
