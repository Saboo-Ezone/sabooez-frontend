import React, { useEffect, useState } from "react";
import mobileBanner from "../../assets/vehicle/iev/IeV-series-main-banner-mobile-new.jpg";
import banner from "../../assets/vehicle/iev/IeV-series-main-banner-new-updated.jpg";
import featureBanner1 from "../../assets/vehicle/iev/indias-first-ev-section.png";
import purpleBg from "../../assets/vehicle/iev/purple-plus-minus.png";
import formBg from "../../assets/vehicle/iev/enquire-now-section.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuCheck } from "react-icons/lu";
import { FaCaretRight } from "react-icons/fa";
import EnquiryForm from "../otherComponents/EnquirForm";

const Iev = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <HeroSection />
      <EnquiryForm />
      <Features />
      <Features2 />
      <VideoSection />
      <Specifications />
      <CCP />
      <FormIev />
    </div>
  );
};

export default Iev;

const HeroSection = () => {
  return (
    <div>
      {/* <div className="flex flex-col items-center justify-center h-screen bg-white">
                <h1 className="text-6xl font-bold">IEV Series</h1>
                <p className="mt-4 text-2xl">The IEV Series is a range of electric vehicles that are designed to be the future of urban mobility. These vehicles are designed to be efficient, reliable, and affordable.</p>
            </div> */}
      <div
        className="relative min-h-[92vh] bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <img src={mobileBanner} alt="" className="w-full h-full md:hidden " />
        {/* <img src={banner} alt="" className="hidden w-full h-full md:block " /> */}
        <div className="absolute space-y-3 text-center -translate-x-1/2 left-1/2 top-10 ">
          <p className="text-3xl font-medium text-white sm:text-4xl md:text-5xl">
            Presenting the revolutionary
          </p>
          <p className="text-3xl font-medium text-[#55BA88] sm:text-4xl md:text-5xl">
            Switch IeV Series
          </p>
        </div>
        <div className="absolute space-y-3 text-center -translate-x-1/2 bottom-20 left-1/2 ">
          <img
            src="https://hgsidev.teamhgs.com/switchwebsitedev/sites/default/files/elv/iev-logo.svg"
            alt="logo"
            className="h-10 mx-auto md:h-12"
          />
          <p className="font-mono text-xl text-[#505bf9] lg:text-2xl">
            The intelligent electric vehicle
          </p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div>
      <section className="flex flex-col mb-1 overflow-hidden bg-emerald-500 md:flex-row">
        <div
          // style={{ backgroundImage: `url(${patternGreen})` }}
          className="w-full p-6 text-white sm:p-8 md:w-1/2 lg:p-12"
        >
          <div className="text-h1" data-aos="fade-up" data-aos-delay="100">
            India’s first EV in 2~3.5T category with best in class TCO
          </div>
          <div className="flex flex-col items-center justify-between gap-2 my-6 text-center sm:flex-row lg:my-10">
            <div className="md:w-1/3">
              <img
                src={require("../../assets/vehicle/iev/feature-1.svg").default}
                alt=""
                className="pb-2 mx-auto"
              />
              <p className="font-semibold">Class Leading Payload</p>
            </div>
            <div className="md:w-1/3">
              <img
                src={require("../../assets/vehicle/iev/feature-2.svg").default}
                alt=""
                className="pb-2 mx-auto"
              />
              <p className="font-semibold">Single Day Operation</p>
            </div>
            <div className="md:w-1/3">
              <img
                src={require("../../assets/vehicle/iev/feature-3.svg").default}
                alt=""
                className="pb-2 mx-auto"
              />
              <p className="font-semibold">Charges Vehicle On Braking</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <p>Architecture</p>
            </div>
          </div>
          <div
            className="flex flex-col justify-between xl:flex-row "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-lg xl:pr-6">
              Powered by SWITCH proprietary tech and the latest innovations in
              electromobility.
            </div>
            <div
              className="pb-10 mt-6 whitespace-nowrap"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
          </div>
        </div>

        <div
          className="h-[45vh] w-full bg-cover bg-center bg-no-repeat md:h-auto md:w-1/2"
          style={{ backgroundImage: `url(${featureBanner1})` }}
          data-aos="fade-in"
          data-aos-delay="200"
        ></div>
      </section>
    </div>
  );
};

const Features2 = () => {
  return (
    <div className="bg-[#edede6] bg-opacity-75">
      <section className="flex flex-col mb-1 overflow-hidden md:flex-row">
        <div
          className="w-full p-6 sm:p-8 md:w-1/2 lg:p-12"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <img
            src={require("../../assets/vehicle/iev/D-2-seating.png")}
            alt=""
          />
        </div>{" "}
        <div
          // style={{ backgroundImage: `url(${patternGreen})` }}
          className="w-full p-6 sm:p-8 md:w-1/2 lg:p-12"
        >
          <div data-aos="fade-up" data-aos-delay="100" className="mb-4 md:mb-5">
            <img
              src="https://hgsidev.teamhgs.com/switchwebsitedev/sites/default/files/elv/iev-logo.svg"
              alt="logo"
              className="h-8 mb-4 "
            />
            <p className="text-sm">
              The Switch IeV Series is a game-changer in the electric Light
              Commercial Vehicle (eLCV) segment, redefining mid and last-mile
              transportation. It showcases Switch's global expertise in
              electrifying logistics. With an industry-leading turnaround time,
              the Switch IeV is set to revolutionize last-mile logistics, paving
              the way for a more efficient and sustainable urban mobility
              future.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="pb-2 text-2xl font-bold font-roboto">Key Features</p>
            <div className="flex flex-col justify-between gap-2 mt-6 text-center sm:flex-row md:items-start lg:my-10">
              <div className="md:w-1/3">
                <img
                  src={require("../../assets/vehicle/iev/key-1.svg").default}
                  alt=""
                  className="pb-2 mx-auto "
                />
                <p className="font-mono text-lg font-bold">
                  Hill Hold <br className="hidden lg:block" /> Assist
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                  src={require("../../assets/vehicle/iev/key-2.svg").default}
                  alt=""
                  className="pb-2 mx-auto"
                />
                <p className="font-mono text-lg font-bold">
                  Electric Power <br className="hidden lg:block" /> Steering
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                  src={require("../../assets/vehicle/iev/key-3.svg").default}
                  alt=""
                  className="pb-2 mx-auto"
                />
                <p className="font-mono text-lg font-bold">
                  Sliding & <br className="hidden sm:block" /> Reclining Driver
                  <br className="hidden lg:block" /> Seat
                </p>
              </div>
            </div>
          </div>

          <div
            className="grid pb-6 mt-6 gap-y-3 sm:gap-y-6 lg:grid-cols-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex gap-2 md:gap-3 ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#505bf9] p-1 text-white">
                <LuCheck />
              </div>
              <p className=" font-diatype">Dual Tone Dashboard</p>
            </div>
            <div className="flex gap-2 md:gap-3 ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#505bf9] p-1 text-white">
                <LuCheck />
              </div>
              <p className=" font-diatype">Reverse Park Alert</p>
            </div>
            <div className="flex gap-2 md:gap-3 ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#505bf9] p-1 text-white">
                <LuCheck />
              </div>
              <p className=" font-diatype">2 USB Ports</p>
            </div>
            <div className="flex gap-2 md:gap-3 ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#505bf9] p-1 text-white">
                <LuCheck />
              </div>
              <p className=" font-diatype">Lockable Glove Box</p>
            </div>
            <div className="flex gap-2 md:gap-3 ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#505bf9] p-1 text-white">
                <LuCheck />
              </div>
              <p className=" font-diatype">Spacious Cabin With D+2 Seating</p>
            </div>
            <div className="flex gap-2 md:gap-3 ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#505bf9] p-1 text-white">
                <LuCheck />
              </div>
              <p className=" font-diatype">Provision (Music/Radio/Aux/USB*)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const VideoSection = () => {
  return (
    <div>
      <section data-aos="fade-out" data-aos-delay="200">
        <video
          width="100%"
          preload="metadata"
          loop
          autoPlay
          playsInline
          muted
          className="d-block"
        >
          <source
            src="https://switchmobilitytech.s3.eu-west-2.amazonaws.com/SWITCH_IEV_LOW_RES_090723.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
};

const Specifications = () => {
  const [selected, setSelected] = useState(0);
  const modelDetails = [
    [
      {
        category: "Model Details",
        specs: [
          {
            label: "GVW (kg)",
            value: "2590 ",
            value2: "3790 ",
          },
          { label: "Payload (kg)", value: "1200 (FSD)", value2: "1400 (FSD)" },
          {
            label: "Cargo Body Dimension-FSD",
            value: "8.6 ft x 5.3 ft x 2.4 ft",
            value2: "9.7 ft x 5.7 ft x 2.4 ft",
          },
          { label: "Wheelbase (mm)", value: "2510 ", value2: " 2950" },
          {
            label: "Container Suitability",
            value: "170 CFT ",
            value2: " 340 CFT",
          },
        ],
      },
      {
        category: "EV Power Train Details",
        specs: [
          {
            label: "Battery Pack Type",
            value: "LFP, 25.6",
            value2: "LFP, 32.2",
          },
          { label: "Peak Power (kW)", value: "40 ", value2: " 60" },
          { label: "Performance", value: "190 ", value2: " 230" },
          { label: "Range Geared Max. (km)", value: "70 ", value2: " 80" },
          {
            label: "Model Details",
            value: "22 X 5 X 3 ",
            value2: " 23 X 5 X 4",
          },
        ],
      },
      {
        category: "Performance",
        specs: [
          {
            label: "Range (km)",
            value: "120",
            value2: "120",
          },
          { label: "Max. Geared Speed", value: "70 ", value2: " 80" },

          { label: "Gradeability (%)", value: "22 ", value2: " 23" },
        ],
      },
    ],
    [
      {
        category: "Charger Details",
        specs: [
          {
            label: "AC Charging Type",
            value: "Standard - Type 2 AC ",
            value2: "Standard - Type 2 AC ",
          },
          {
            label: "DC Charging Type (Optional)",
            value: "Optional - CCS2 (AC & DC)",
            value2: "Optional - CCS2 (AC & DC)",
          },
        ],
      },
      {
        category: "Charging Time",
        specs: [
          {
            label: "AC Charging",
            value: "6 hours (Approx) - 15A (3.3 kW charger)",
            value2: "8 hours (Approx) - 15A (3.3 kW charger)",
          },
          {
            label: "DC Charging",
            value: "Optional - 60 mins - 30 kW Charger ",
            value2: " Optional - 75 mins - 30 kW Charger",
          },
        ],
      },
    ],
    [
      {
        category: "Others",
        specs: [
          { label: "Seating Capacity", value: "D+1", value2: "D+2" },
          { label: "Ground Clearance (mm)", value: "177", value2: "206" },
          {
            label: "Steering",
            value: "Electric Power Steering",
            value2: "Electric Power Steering",
          },
          {
            label: "Tyre - Front & Rear",
            value: "185 R14 LT 8 PR",
            value2: "7.00 R15 LT 12 PR Radial",
          },
          {
            label: "Front Suspension",
            value: "Rigid Susp. + Parabolic leaf",
            value2: "Rigid Susp. + Parabolic leaf",
          },
          {
            label: "Rear Suspension",
            value: "Rigid Suspension	",
            value2: "Semi elliptical Leaf",
          },
          { label: "Brakes", value: "Disc/ Drum", value2: "Disc/ Drum" },
          {
            label: "Warranty - Vehicle",
            value: "3 yrs/ 150K km*	",
            value2: "3 yrs/ 150K km*	",
          },
          {
            label: "Warranty - Battery",
            value: "5 yrs/ 150K km*	",
            value2: "5 yrs/ 150K km*	",
          },
        ],
      },
    ],
  ];

  return (
    <div className="bg-white ">
      <div className="pt-10 lg:pt-12">
        <img src={purpleBg} alt="" className="h-20 col-span-2 lg:h-h-20 lg:" />
      </div>
      <div className="">
        <h1 className="p-4 text-2xl font-diatype sm:p-6 md:text-3xl lg:p-12 lg:text-4xl xl:text-5xl">
          Detailed Specifications
        </h1>
        <div className="flex  bg-[#EDEDE6] ">
          <div className="hidden w-[30%] flex-col justify-between p-6  md:flex lg:py-12">
            <div className="px-10 ">
              <div className="flex items-center">
                <button
                  onClick={() => setSelected(0)}
                  className={`z-10  w-[11rem]  py-2  pl-2 text-left  xl:pl-4 ${
                    selected === 0 && "bg-[#505bf9] text-white"
                  } `}
                >
                  Primary Details
                </button>
                {selected === 0 && (
                  <div className="-ml-3 h-6 w-6  rotate-45 bg-[#505bf9]"></div>
                )}
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => setSelected(1)}
                  className={`z-10  w-[11rem]  py-2  pl-2 text-left  xl:pl-4 ${
                    selected === 1 && "bg-[#505bf9] text-white"
                  } `}
                >
                  Charging Details
                </button>
                {selected === 1 && (
                  <div className="-ml-3 h-6 w-6  rotate-45 bg-[#505bf9]"></div>
                )}
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => setSelected(2)}
                  className={`z-10  w-[11rem]  py-2  pl-2 text-left  xl:pl-4 ${
                    selected === 2 && "bg-[#505bf9] text-white"
                  } `}
                >
                  Others
                </button>
                {selected === 2 && (
                  <div className="-ml-3 h-6 w-6  rotate-45 bg-[#505bf9]"></div>
                )}
              </div>
            </div>
            <img
              src={require("../../assets/vehicle/iev/detailedLeftTruck.png")}
              alt=""
            />
          </div>
          <div className="w-full px-6 py-10 md:w-[45%] lg:px-8 lg:py-12">
            <div className="flex justify-center gap-2 mb-4 md:hidden">
              <button
                onClick={() => setSelected(0)}
                className={`z-10    px-2  py-2 text-left  xl:pl-4  ${
                  selected === 0 && "bg-[#505bf9] text-white "
                } `}
              >
                Primary Details
              </button>

              <button
                onClick={() => setSelected(1)}
                className={`z-10    px-2  py-2 text-left  xl:pl-4  ${
                  selected === 1 && "bg-[#505bf9] text-white "
                } `}
              >
                Charging Details
              </button>

              <button
                onClick={() => setSelected(2)}
                className={`z-10    px-2  py-2 text-left  xl:pl-4  ${
                  selected === 2 && "bg-[#505bf9] text-white "
                } `}
              >
                Others
              </button>
            </div>
            <div className="flex">
              <div className="w-[50%] font-roboto text-xl font-bold text-[#505bf9]">
                Models
              </div>
              <div className="w-[25%]">
                <img
                  src="https://hgsidev.teamhgs.com/switchwebsitedev/sites/default/files/elv/IV3-logo.svg"
                  alt=""
                  className="h-4 mx-auto md:h-5"
                />
                {/* <img src={require("../../assets/vehicle/iev/IV3-logo.svg").default} alt="" /> */}
              </div>
              <div className="w-[25%]">
                <img
                  src="https://hgsidev.teamhgs.com/switchwebsitedev/sites/default/files/elv/IEV-4-01.svg"
                  alt=""
                  className="h-4 mx-auto md:h-5"
                />
              </div>
            </div>
            {modelDetails[selected].map((section) => (
              <div key={section.category} className="w-full mb-2 lg:mb-4 ">
                {/* <h3>{section.category}</h3> */}
                <table className="w-full">
                  <thead className="">
                    <tr>
                      <th
                        colSpan="3"
                        className="py-2 text-lg font-semibold text-left font-diatype md:text-xl"
                      >
                        {section.category}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-full border-t border-black">
                    {section.specs.map((spec, index) => (
                      <tr key={index} className="w-full text-sm">
                        <td className=" w-[50%] border-y border-gray-300 py-1 ">
                          {spec.label}
                        </td>
                        <td className=" w-[25%] border border-gray-300 px-3 py-1  text-center">
                          {spec.value}
                        </td>
                        <td className=" w-[25%] border-y border-gray-300 px-3 py-1  text-center">
                          {spec.value2}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            {selected === 2 && (
              <div className=" -mt-2 w-full text-xs italic text-[#505bf9]">
                *Whichever is earlier
              </div>
            )}
          </div>
          <div className="hidden w-[30%] bg-emerald-500 p-6 font-diatype text-white md:block lg:p-12  ">
            <p className="pb-8 text-xl">Key Specficaion</p>
            <p className="text-3xl pb- xl:text-4xl">1700 (FSD)</p>
            <p className="pb-6 font-light">Payload (kg)</p>
            <hr />

            <p className="pt-6 text-3xl pb- xl:text-4xl">2590 mm</p>
            <p className="pb-6 font-light">Wheelbase</p>
            <hr />
            <p className="pt-6 text-3xl pb- xl:text-4xl">60 kW </p>
            <p className="pb-6 font-light">Peak Power</p>
            <hr />
            <p className="pt-6 text-3xl pb- xl:text-4xl">340 CFT</p>
            <p className="pb-6 font-light">Container Sutaibility</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CCP = () => {
  return (
    <div>
      <div className="pt-10 lg:pt-12">
        <img src={purpleBg} alt="" className="h-20 col-span-2 lg:h-h-20 lg:" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 sm:p-6 lg:p-12">
          <h1 className="pb-3 text-2xl font-diatype md:text-3xl lg:text-4xl xl:text-5xl">
            Customer Centric Product
          </h1>
          <p className="pb-4 text-sm text-justify md:pb-8">
            One of the most compelling aspects of the Switch IeV Series is its
            versatility, making it suitable for a wide range of transportation
            needs. Whether it's last-mile deliveries for e-commerce or urban
            goods distribution, these vehicles offer a flexible solution that
            can adapt to various tasks, ultimately contributing to more
            efficient and sustainable mobility in our cities.
          </p>
          <p className="pb-4 text-lg font-diatype lg:text-xl">
            Application Areas
          </p>
          <div className="grid grid-cols-2 pb-10 md:grid-cols-3">
            <div className="grid grid-cols-2 col-span-2 gap-4">
              <div className="flex items-center ">
                <FaCaretRight className="pr-2 text-lg text-[#505bf9] lg:text-xl" />
                <p>Parcel & Courier</p>
              </div>
              <div className="flex items-center ">
                <FaCaretRight className="pr-2 text-lg text-[#505bf9] lg:text-xl" />
                <p>Ecommerce</p>
              </div>
              <div className="flex items-center ">
                <FaCaretRight className="pr-2 text-lg text-[#505bf9] lg:text-xl" />
                <p>FMCG</p>
              </div>
              <div className="flex items-center ">
                <FaCaretRight className="pr-2 text-lg text-[#505bf9] lg:text-xl" />
                <p>White Goods</p>
              </div>
              <div className="flex items-center ">
                <FaCaretRight className="pr-2 text-lg text-[#505bf9] lg:text-xl" />
                <p>Organized Retail</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <img
            src={require("../../assets/vehicle/iev/parcel-couriers-truck.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const FormIev = () => {
  return (
    <div>
      <div className="grid bg-[#edede6] bg-opacity-75 md:grid-cols-2">
        <div
          className="relative min-h-[50vh] bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${formBg})` }}
        ></div>
        <div className="p-6 lg:p-12">
          <p className="pb-2 text-xl font-diatype lg:text-2xl">Enquire Now</p>
          <img
            src="https://hgsidev.teamhgs.com/switchwebsitedev/sites/default/files/elv/iev-logo.svg"
            alt=""
            className="h-4 mb-4 lg:mb-8 lg:h-5"
          />
          <input
            type="text"
            className="w-full max-w-md px-4 py-2 mb-4 bg-white border rounded"
            placeholder="Full Name*"
          />
          <input
            type="text"
            className="w-full max-w-md px-4 py-2 mb-4 bg-white border rounded"
            placeholder="Mobile Number*"
          />
          <input
            type="text"
            className="w-full max-w-md px-4 py-2 mb-4 bg-white border rounded"
            placeholder="Email Address*"
          />

          <textarea
            type=""
            className="w-full max-w-md px-4 py-2 mb-4 bg-white border rounded"
            placeholder="Message*"
          />
          <div>
            <button className="bg-[#06BE85] rounded-full px-6 py-2 text-white hover:bg-[#505bf9]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
