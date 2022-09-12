import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import banner from "../../assets/images/pose_2.png";

const Banner = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-5xl font-bold">
            Your <span className="text-primary">Health</span> Is Our <br /> Top{" "}
            <span className="text-secondary">Priority</span>
          </h1>
          <p className="py-6">
            There are many variations of passages of lpsum <br /> available, but
            the majority hae suffered.
          </p>
          <button className="btn btn-primary">Meet Your Specialist</button>
        </div>
        <div className="relative">
          <img
            src={banner}
            className="sm:max-w-[100%] lg:max-w-sm rounded-lg sm:w-[70%]"
            alt="chair"
          />
          <button className="btn btn-secondary text-white absolute top-[150px] left-[-100px]">
            <svg
              class="h-8 w-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="12" cy="12" r="9" /> <path d="M9 12l2 2l4 -4" />
            </svg>
            <span className="ml-4">Regular Checkup</span>
          </button>
          {/* avatar */}
          <div className="bg-slate-100 inline-block p-5 rounded absolute bottom-[-100px] right-[-65px]">
            <h3 className="text-xl text-center">Meet Our Doctors</h3>
            {/* img */}
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div className="ml-6">
                <div className="avatar placeholder ml-8">
                  <div className="w-12 bg-primary text-neutral-content">
                    <svg
                      class="h-8 w-8 text-white bg-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* line */}
            <hr className="bg-gradient-to-r from-primary to-white p-2 rounded mt-2" />
            <hr className="bg-gradient-to-r from-white to-primary p-2 rounded mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
